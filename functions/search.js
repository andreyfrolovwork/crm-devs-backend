require("dotenv").config()

const mongoose = require("mongoose")
const { readFile } = require("node:fs/promises")
const models = require("../models/index.js")

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    const result = await models.section.find({})
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
