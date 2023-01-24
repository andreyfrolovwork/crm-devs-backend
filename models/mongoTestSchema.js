const { Schema, model } = require("mongoose")

const ApartSchema = new Schema({
  rooms: {
    type: String,
    required: true,
  },
})

module.exports = model("test", ApartSchema)
