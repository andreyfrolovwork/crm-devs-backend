require("dotenv").config()
const pathArray = require("./path.js")
const holes = pathArray.map((path, i) => {
  return {
    classNameHoles: `polygon house${i}`,
    classNameShape: "polygon shape",
    idShape: `house${i}`,
    d: path,
    show: true,
    sold: false,
    toolTipClass: `tooltip house${i}-tooltip`,
    idToolTip: `house${i}-tooltip`,
    toolTipText: `Площадка номер ${i}`,
    routeTo: {
      path: "/floors",
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
      num: 1,
      sectionImage: "section-1.jpg",
      sectionImageSmall: "section-1.jpg_small",
      sections: holes,
    })
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
