<div align="center">
<h1>Discord Hooks</h1>

Basic Discord Hooks

<a href="https://www.npmjs.com/package/discord-hooks"><img src="https://img.shields.io/npm/v/discord-hooks.svg?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/discord-hooks"><img src="https://img.shields.io/npm/dt/discord-hooks.svg?maxAge=3600" alt="npm downloads" /></a>
</div>

# About

Basic discord webhook library. Allows you to send messages, embeds to discord with webhooks. 

# Installation

```bash
npm install discord-hooks
```

# Import

Import the discord-hooks module to your project.

```js
import Webhook from "discord-hooks";
```

# Commands

- ### send(username, avatarUrl, content, embed)

```js
const webhook = new Webhook("YOUR WEBHOOK URL")
webhook.send(
'USERNAME',
'AVATAR_URL',
'This is a test message!',
[
    {
        title: "Discord Hooks",
        url: "https://npmjs.com/package/discord-hooks",
        color: "#5865F2",
        description: "Basic discord webhook library. Allows you to send messages, embeds to discord with webhooks.",
        timestamp: new Date(),
        footer: {
            text: "This message sent with discord-hooks.",
            icon_url: "ICON_URL"
        }
    }
]
)
```