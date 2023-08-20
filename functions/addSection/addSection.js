require("dotenv").config()
const pathArray = require("./path2.js")
const mongoose = require("mongoose")
const models = require("../../models/index.js")
const { getSection, getFloor } = require("./functions.js")

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
    toolTipText: `Этаж ${getFloor(i)} Секция ${getSection(i)}`,
    routeTo: {
      path: "/floors",
      query: {
        section: getSection(i),
        floor: getFloor(i),
      },
    },
  }
})

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test", {
      useNewUrlParser: true,
    })
    await models.section.insertMany({
      num: 3,
      sectionImage: "n_all_sections.webp",
      sectionImageSmall: "n_all_sections.webp",
      sections: holes,
      sectionsLabelHoles: holes,
    })
    debugger
  } catch (e) {
    console.log(e)
    debugger
  }
}
start()
