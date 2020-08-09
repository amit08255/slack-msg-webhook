import axios from 'axios';
import { text } from 'micro';

// An utility function to be used with async function to handle promise (API calls) with await
// without writing exception codes
const to = (promise) => promise.then((data) => [null, data])
    .catch((err) => [err]);

async function mainApp(req, res) {
    const body = await text(req);
    const data = { text: body };

    await to(axios.post(process.env.SLACK_WEBHOOK_URL, data));

    res.send('Welcome to Slack-Dev Bot!');
}

export default mainApp;
