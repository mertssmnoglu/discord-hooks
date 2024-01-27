import { Embed } from "./types/embed"

class Webhook {
  private webhook_url: string
  private username: string
  private avatar_url: string
  constructor(webhook_url: string, username: string, avatar_url: string) {
    this.webhook_url = webhook_url
    this.username = username
    this.avatar_url = avatar_url
  }

  async send(message?: string, embeds?: Embed[]): Promise<Webhook> {
    const payload = {
      username: this.username,
      avatar_url: this.avatar_url,
      content: message,
      embeds: embeds,
    }

    await fetch(this.webhook_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      return new Error(err)
    })
    return this
  }

  async destroy(): Promise<Response | Error> {
    return await fetch(this.webhook_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).catch((err) => {
      return new Error(err)
    })
  }
}

export default Webhook
