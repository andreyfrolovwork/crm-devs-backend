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
  price: {
    type: Number,
    required: false,
  },
  floor: {
    type: Number,
    required: true,
  },
})

module.exports = model("Apart", ApartSchema)
