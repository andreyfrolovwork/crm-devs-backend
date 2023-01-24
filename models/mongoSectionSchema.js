const { Schema, model } = require("mongoose")

const mongoSectionSchema = new Schema({
  classNameHoles: {
    type: String,
    required: true,
  },
  classNameShape: {
    type: String,
    required: true,
  },
  idShape: {
    type: String,
    required: true,
  },
  d: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    required: false,
    default: true,
  },
  sold: {
    type: Boolean,
    required: false,
    default: true,
  },
  toolTipClass: {
    type: String,
    required: true,
  },
  idToolTip: {
    type: String,
    required: true,
  },
  toolTipText: {
    type: String,
    required: true,
  },
  routeTo: {
    path: {
      type: String,
      required: false,
    },
    query: Schema.Types.Mixed,
  },
})

const sectionsSchema = new Schema({
  num: {
    type: Number,
    required: true,
  },
  sectionImage: {
    type: String,
    required: true,
  },
  sectionImageSmall: {
    type: String,
    required: true,
  },
  sections: [mongoSectionSchema],
})
module.exports = model("section", sectionsSchema)
