import Webhook from "../src/index"
import assert from "assert"

const data = {
  testWebhook: new Webhook(
    "https://discord.com/api/webhooks/1200770525815902239/IGbXff-lIy3_nzS0L7ekNbaf-jlwAgEZVCZd1yZC4FAIobNrMTrpPwLFdjkflhgAsLSB",
    "Test",
    ""
  ),
}

describe("Webhook", () => {
  const { testWebhook } = data
  it("should send a message", async () => {
    await testWebhook
      .send("Test Message")
      .then(() => {
        assert.ok(true)
      })
      .catch(() => {
        assert.ok(false)
      })
  })

  it("should send an embed", async () => {
    await testWebhook
      .send("")
      .then(() => {
        assert.ok(true)
      })
      .catch(() => {
        assert.ok(false)
      })
  })
})
