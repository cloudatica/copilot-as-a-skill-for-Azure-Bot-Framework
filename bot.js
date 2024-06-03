// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');
const CopilotSkillClass = require('./CopilotSkillClass');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.myCopilotSkill = new CopilotSkillClass('welcomeText');
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            console.log('Message recevied.', context);

            let botResponse = '';
            try {
                botResponse = await this.myCopilotSkill.getBotResponse(context.activity.text);
            } catch (error) {
                console.error('Failed to retrieve token:', error);
            }

            //const replyText = botResponse; // `Echo: ${ context.activity.text }`;
            //await context.sendActivity(MessageFactory.text(replyText, replyText));
            let replyText = '';
            botResponse.slice(1).forEach(item => {
                if (item.replyToId == this.myCopilotSkill.userMessageId)
                {
                    replyText += item.text + '\n';
                };
            });

            await context.sendActivity(MessageFactory.text(replyText, replyText));


            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            console.log('Member added.', context);
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Hello and welcome there!';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
