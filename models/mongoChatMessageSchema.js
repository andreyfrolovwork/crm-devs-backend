const { Schema, model } = require("mongoose")

const ChatMessageSchema = new Schema({
  messageDate: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  telNumber: {
    type: Number,
    required: true,
  },
})

module.exports = model("ChatMessage", ChatMessageSchema)
