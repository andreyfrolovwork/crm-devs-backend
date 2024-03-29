const { Schema, model } = require("mongoose")

const ApartSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
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
  area2: {
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
  show: {
    type: Boolean,
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
  },
  planNum: {
    type: Number,
    required: true,
  },
})

module.exports = model("Apart", ApartSchema)
