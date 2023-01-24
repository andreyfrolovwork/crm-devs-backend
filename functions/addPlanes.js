require("dotenv").config()
const pathArray = require("./sections.js")
const holes = pathArray[5].map((path, i) => {
  return {
    classNameHoles: `polygon house${i}`,
    classNameShape: "polygon shape",
    idShape: `house${i}`,
    d: path,
    show: true,
    sold: false,
    toolTipClass: `tooltip house${i}-tooltip`,
    idToolTip: `house${i}-tooltip`,
    toolTipText: `floor${i}`,
    routeTo: {
      path: "/aparts",
      query: {
        apartments: i,
      },
    },
  }
})

const mongoose = require("mongoose")
const { readFile } = require("node:fs/promises")
const models = require("../models/index.js")

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    const result = await models.section.insertMany({
      num: 106,
      sectionImage: "section-1_plane.svg",
      sectionImageSmall: "section-1_plane.svg",
      sections: holes,
    })
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
