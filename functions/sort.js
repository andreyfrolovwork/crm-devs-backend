require("dotenv").config()
const mongoose = require("mongoose")
const models = require("../models/index.js")

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    const aparts = await models.aparts.find({}).sort({ price: -1 })
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
