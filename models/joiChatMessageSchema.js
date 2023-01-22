const joi = require("joi")

const joiChatMessageSchema = joi.object({
  name: joi.string().required(),
  telNumber: joi.string().min(11).required(),
})

module.exports = joiChatMessageSchema
