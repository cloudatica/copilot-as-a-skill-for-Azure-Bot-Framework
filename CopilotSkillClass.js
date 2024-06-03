const axios = require('axios'); // Assuming you are using axios for HTTP requests
const JSONbig = require('json-bigint');


// export class CoPilot {
//     constructor() {
//         this.name = 'Copilot';
//         // (async () => {
//         //     try {
//         //         const token = await getToken('YOUR_TOKEN_ENDPOINT_URL');
//         //         console.log('Retrieved token:', token);
//         //     } catch (error) {
//         //         console.error('Error fetching token:', error);
//         //         throw error; // Or handle the error differently
//         //     }
//         // })();
//     }

//     Test() {
//         console.error('Error fetching token:');
//     }
// }
// MyClass.js
class CopilotSkillClass {
    constructor(name) {
        this.name = name;
    }

    async fetchToken(TokenEndPoint) {
        const response = await axios.get(TokenEndPoint);
        //console.log('Token:', response);
        //const responseString = response.data;
        //const tokenObject = JSONbig.parse(responseString);
        //const token = tokenObject.Token;
        console.log('Name:', this.name);
        console.log('Token:', (response.data.token.length), " ",response.data.token);
        this.conversationId = response.data.conversationId; // Replace with your actual conversation ID
        this.token = response.data.token; // Replace with your actual Direct Line secret

        // const activity = {
        //     locale: 'en-EN',
        //     type: 'message',
        //     from: {
        //         id: 'user1'
        //     },
        //     text: 'hello'
        // };


        // let config = {
        //     method: 'post',
        //     maxBodyLength: Infinity,
        //     url: 'https://directline.botframework.com/v3/directline/conversations',
        //     headers: {
        //         Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ik5MZjUwanFheTN1R0VpQUpOV29EWmZzRnE4QSIsIng1dCI6Ik5MZjUwanFheTN1R0VpQUpOV29EWmZzRnE4QSIsInR5cCI6IkpXVCJ9.eyJib3QiOiIzNTU4YWI5ZS01YzQ5LTQ5NmMtYmUxNy1lNGFhN2Q3Y2E0NGUiLCJzaXRlIjoibzRWNUlBckdFd3MiLCJjb252IjoiZTRSdXk1VHh2R0Y2d3FoT2REdVJnLXVzIiwidXNlciI6IjIzNDZlMTJhLTAwODgtNGI1My1hMTM4LTMzY2Q5ZTUyMjdhMiIsIm5iZiI6MTcxNjM1NTQ3MywiZXhwIjoxNzE2MzU5MDczLCJpc3MiOiJodHRwczovL2RpcmVjdGxpbmUuYm90ZnJhbWV3b3JrLmNvbS8iLCJhdWQiOiJodHRwczovL2RpcmVjdGxpbmUuYm90ZnJhbWV3b3JrLmNvbS8ifQ.lsH9WyftNtpnJDODtLI8fu-Onp4j0UlKUu4K445KzeuxTjWTEHj_IwX7eX3CJEEgXiNuDCS0B8p7FlPAgAAy7Oe_IyHRRncqkLcuxqTEcoq852AbZ_sa05slRYFBo4OGhNYb4couapQjNXwrlINP_URGwNrzEqOHZV4-4g3m_qCPOPjC2Ool65-fOyfltgp8Ml_yFAmuXcnWAR0WBuBnWBkzMumA8p6GOwcr5wpqJ0OrlKBvfiZB3UKB5E6M_K3gzIYw7_FuvK4QRyGT64DR5GGgwAlhlj4Ox4GpPoR7l16cWnNxUUNELW1RM-hSgJ6YiKoY1nxghKF--ZWldtdj1Q'
        //     }
        // };
        //let token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ik5MZjUwanFheTN1R0VpQUpOV29EWmZzRnE4QSIsIng1dCI6Ik5MZjUwanFheTN1R0VpQUpOV29EWmZzRnE4QSIsInR5cCI6IkpXVCJ9.eyJib3QiOiIzNTU4YWI5ZS01YzQ5LTQ5NmMtYmUxNy1lNGFhN2Q3Y2E0NGUiLCJzaXRlIjoibzRWNUlBckdFd3MiLCJjb252IjoiQlAzTjhYVkpKbzhDaUM3M0NhS2xNUy11cyIsInVzZXIiOiIzOGQ3OGY5OC1jZTgwLTQ5MDgtOTU3NC1mZGViYTY3OTlkNmUiLCJuYmYiOjE3MTYzNTc0MDEsImV4cCI6MTcxNjM2MTAwMSwiaXNzIjoiaHR0cHM6Ly9kaXJlY3RsaW5lLmJvdGZyYW1ld29yay5jb20vIiwiYXVkIjoiaHR0cHM6Ly9kaXJlY3RsaW5lLmJvdGZyYW1ld29yay5jb20vIn0.SdLeqPBisuQD7DJK_5G4MW6gjM4VEr3UzTVy-i3h4DRNy52CWooyj7vLpi9XZdZ5gRowjb4M7KQwIjM-rYh6zP4LhQjPR8MLgtMdkUR07l-zKwrzRbCAflc8jwVK9ekqPdNNMiHlMTvTmNU3N0AUtKhFo4-jxyjIDkz2RVSje5R0oFGhvBGTiSeTwyeY7B5sM9ojtaSn55pEQzFMNBdJ5H1KNHrnaEgyJqaQA8TTHf5e3LKVH93V3htX264cAbLLMtxa4Pf_EVyDM-YQfAmrG0gZhos--5Mo87vUCq6SO9mK8s3zppGDQ0MCAZfcCXP6B-QzEN7-Acs8uAGvYOlXZA';

        console.log('Token:', `Bearer ${this.token}`);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://directline.botframework.com/v3/directline/conversations',
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        // After getting initial token, makign the call to start the conversation and get the new token, streamurl for websockets, and conversationId
        var response2 = await axios.request(config);
        this.conversationId = response2.data.conversationId;
        this.token = response2.data.token;
        console.log('Response2:', response2.data);
    }

    async getBotResponse(message) {
        try {

            if (!(this.token)) {
                //await this.fetchToken('https://directline.botframework.com/v3/directline/tokens/generate');
                await this.fetchToken('https://default6989c022c3574fe9aae768a63f4db3.2c.environment.api.powerplatform.com/powervirtualagents/botsbyschema/cr74d_copilot2/directline/token?api-version=2022-03-01-preview')
            }

            //await this.myInstance.fetchToken('https://default6989c022c3574fe9aae768a63f4db3.2c.environment.api.powerplatform.com/powervirtualagents/botsbyschema/cr74d_copilot2/directline/token?api-version=2022-03-01-preview');


            let data = JSON.stringify({
                "locale": "en-EN",
                "type": "message",
                "text": message
            });

            //send the activity including the message sent by the user using the conversation id that was received when the conversation was started and the token received from the same call
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `https://directline.botframework.com/v3/directline/conversations/${this.conversationId}/activities`,
                headers: {
                    Authorization: `Bearer ${ this.token }`,
                    'Content-Type': 'application/json'
                },
                data: data
            };

            let response2 = await axios.request(config);
            console.log('Response3:', response2.data);
            this.userMessageId = response2.data.id; //802ivaCM9p0FrvAGaWGE0-us|0000002

            //get the bot response for this conversataion id. There is a one second sleep implemented to wait for the bot to respond

            config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://directline.botframework.com/v3/directline/conversations/${this.conversationId}/activities`,
                headers: {
                    Authorization: `Bearer ${ this.token }`,
                    'Content-Type': 'application/json'
                },
                data: data
            };


            //sleep for a few seconds
            await new Promise(r => setTimeout(r, 1000));

            response2 = await axios.request(config);

            console.log('Response4:', response2.data);
            return response2.data.activities;

            //console.log('Response1:', response1);
        } catch (error) {
            console.error('Error getting bot response:', error);
        }
    }

}

module.exports = CopilotSkillClass;
