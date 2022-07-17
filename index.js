import fetch from 'node-fetch';
export default class Webhook {
    constructor(webhook_url) {
        this.webhook_url = webhook_url;
    }
    async send(username, avatar_url, content, embed) {
        var parameters = {
            username: username,
            avatar_url: avatar_url,
            content: content,
            embeds: embed
        }
        fetch(this.webhook_url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(parameters)
        }).then(res => {
            if (res.status !== 204) { throw new Error(res.statusText); }
        })
    }
}