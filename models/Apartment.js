const { Schema, model } = require("mongoose")

const ApartSchema = new Schema({
  section: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  similar: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
})

module.exports = model("Apart", ApartSchema)
