import * as Slack from 'slack-node'

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN
 
const slack = new Slack(SLACK_BOT_TOKEN)

export const sendMessageSlack = (message: string, channel: string = 'general') => {
    slack.api('chat.postMessage', {
        text: message,
        channel: channel,
      }, (err, response) => {
        console.log(response);
      });
}
