require("dotenv").config()
const mongoose = require("mongoose")
const { readFile } = require("node:fs/promises")
const models = require("../models/index.js")

const start = async (f) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    await f()
  } catch (e) {
    console.log(e)
    debugger
  }
}

module.exports = start
