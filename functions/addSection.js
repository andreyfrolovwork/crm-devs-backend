require("dotenv").config()
const pathArray = require("./path1.js")

function getFloor(i) {
  if (i < 10) {
    return i + 1
  } else {
    return i + 1 - 10
  }
}

function getSection(i) {
  if (i < 10) {
    return 1
  } else {
    return 2
  }
}

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
        section: getSection(i),
        floor: getFloor(i),
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
      sectionImageSmall: "section-1_small.jpg",
      sections: holes,
    })
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
