import Embed from './types/Embed'

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
    if (embeds)
      for (const embed of embeds) {
        if (Object.keys(embed).length === 0)
          throw new Error('Invalid embed\nAt least one field is required in embeds.')
      }
    const payload = {
      username: this.username,
      avatar_url: this.avatar_url,
      content: message,
      embeds: embeds || [],
    }

    await fetch(this.webhook_url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 400) {
          return new Error(res.statusText)
        }
        return res
      })
      .catch((err) => {
        return new Error(err)
      })
    return this
  }

  async destroy(): Promise<Response | Error> {
    return await fetch(this.webhook_url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).catch((err) => {
      return new Error(err)
    })
  }

  getWebhookUrl(): string {
    return this.webhook_url
  }

  getUsername(): string {
    return this.username
  }

  getAvatarUrl(): string {
    return this.avatar_url
  }

  setWebhookUrl(newWebhookUrl: string): Webhook {
    this.webhook_url = newWebhookUrl
    return this
  }

  setUsername(newUsername: string): Webhook {
    this.username = newUsername
    return this
  }

  setAvatarUrl(newAvatarUrl: string): Webhook {
    this.avatar_url = newAvatarUrl
    return this
  }
}

export default Webhook
