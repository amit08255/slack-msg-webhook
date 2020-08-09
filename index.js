async function mainApp(req) {
    // eslint-disable-next-line no-console
    console.log(req, process.env.SLACK_WEBHOOK_URL);
}

module.exports = mainApp;
