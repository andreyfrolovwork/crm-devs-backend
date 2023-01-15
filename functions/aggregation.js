require("dotenv").config()

const mongoose = require("mongoose")
const { readFile } = require("node:fs/promises")
const models = require("../models/index.js")

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    const result = await models.aparts.aggregate([
      {
        $group: {
          _id: null,
          sections: { $addToSet: "$section" },
          rooms: { $addToSet: "$rooms" },
          priceMax: { $max: "$price" },
          priceMin: { $min: "$price" },
          areaMax: { $max: "$area" },
          areaMin: { $min: "$area" },
        },
      },
    ])
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
