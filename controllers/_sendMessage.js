const axios = require("axios")
const models = require("../models/index.js")
const joiChatMessageSchema = require("../models/joiChatMessageSchema.js")
async function _sendMessage(req, res, next) {
  try {
    const { body } = req
    const newFeedbackMessage = {
      ...body,
    }
    await joiChatMessageSchema.validateAsync(body)
    const message = new models.chatmes(newFeedbackMessage)
    await message.save()
    const text = "✅%0A Пришла новая заявка! %0A" + `Имя: ${body.name}%0A` + `Номер: ${body.telNumber}`
    const messageResponce = await axios.post(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${text}`
    )
    if (messageResponce.status === 200) {
      res.json({
        message: "Успешно",
      })
    } else {
      throw Error("Ошибка с базой данных")
    }
  } catch (e) {
    next(e)
  }
}

module.exports = _sendMessage
