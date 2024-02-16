import Embed from './types/Embed'

class Webhook {
  private webhook_url: string
  private username: string
  private avatar_url: string
  /**
   *
   * @param webhook_url https://discord.com/api/webhooks/{webhook.id}/{webhook.token}
   * @param username The username to be displayed in the webhook message
   * @param avatar_url The avatar url to be displayed in the webhook message. If not provided, the default avatar will be used.
   */
  constructor(webhook_url: string, username: string, avatar_url: string) {
    this.webhook_url = webhook_url
    this.username = username
    this.avatar_url = avatar_url
  }

  /**
   *
   * @param message The message to be sent in the webhook. If not provided, only the embeds will be sent.
   * @param embeds An array of embeds to be sent in the webhook. If not provided, only the message will be sent.
   * @returns The Webhook object
   */
  async send(message?: string, embeds?: Embed[]): Promise<Webhook> {
    if (embeds) {
      for (const embed of embeds) {
        if (Object.keys(embed).length === 0)
          throw new Error('Invalid embed\nAt least one field is required in embeds.')
      }
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

  /**
   *
   * @returns The response from the webhook deletion request
   */
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

  /**
   *
   * @returns The webhook url of the webhook
   */
  getWebhookUrl(): string {
    return this.webhook_url
  }

  /**
   *
   * @returns The username of the webhook
   */
  getUsername(): string {
    return this.username
  }

  /**
   *
   * @returns The avatar url of the webhook
   */
  getAvatarUrl(): string {
    return this.avatar_url
  }

  /**
   *
   * @param newWebhookUrl The new webhook url to be set
   * @returns The Webhook object
   */
  setWebhookUrl(newWebhookUrl: string): Webhook {
    this.webhook_url = newWebhookUrl
    return this
  }

  /**
   *
   * @param newUsername The new webhook username to be set
   * @returns The Webhook object
   */
  setUsername(newUsername: string): Webhook {
    this.username = newUsername
    return this
  }

  /**
   *
   * @param newAvatarUrl The new avatar url to be set
   * @returns The Webhook object
   */
  setAvatarUrl(newAvatarUrl: string): Webhook {
    this.avatar_url = newAvatarUrl
    return this
  }
}

export default Webhook
