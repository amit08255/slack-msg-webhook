
<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Slack Devbot</h3>

  <p align="center">
    This is simple NodeJS app designed in NodeJS and Vercel which allows you to send message directly to slack using webhook. This app can be used with libraries like - <a href="https://github.com/amit08255/error-tracer">Javascript Error Tracker</a> to send error log directly from your NodeJS app to slack.
    <br />
  </p>
</p>

### Built With
This project is designed with technologies listed below - 
* [NodeJS](https://nodejs.org)
* [Slack](https://slack.com)



<!-- GETTING STARTED -->
## Getting Started

First you need to install **NodeJS** and **npm** on your computer.
Then install **Vercel cli** on your computer.


### Installation

1. Clone the repo
```sh
git clone https://github.com/amit08255/slack-msg-webhook.git
```

2. Setup and login to your vercel cli.
```sh
vercel login
```


<!-- USAGE EXAMPLES -->
## Setting Up

1. We start by [creating a new Slack app](https://api.slack.com/apps/new). After naming it, we customize it with our choice of color and icon. When creating a new app, Slack asks for an app name and a default workspace.

2. Now go to slack app **Incoming Webhooks** page, activate webhook.

3. Now click on **Add New Webhook to Workspace** and select your channel for webhook.

4. When added, copy webhook URL.

5. Run below command in terminal (in your project directory) --

```sh
vercel secret add slack-webhook-url xxxxx
```

6. Now to deploy to Vercel, run below command --

```sh
vercel
```

**Note:** Next time when making changes to app, and you want it to deploy to production URL (which is always same) run below command to deploy --

```sh
vercel --prod
```
7. When deployed, you will be provided with production URL which you can use to send message to slack.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Amit Kumar - [@amit08255](https://twitter.com/amit08255) - amitcute3@gmail.com

Project Link: [https://github.com/amit08255/slack-msg-webhook](https://github.com/amit08255/slack-msg-webhook)

