const models = require("../models/index.js")
const joi = require("joi")
const sectionParams = require("../models/joiSectionParams.js")

async function getSections(req, res, next) {
  try {
    const { body } = req
    await sectionParams.validateAsync(body)
    const section = await models.section.findOne({
      section: body.section,
      "sections.show": false,
    })
    const filteredSections = await models.section.findOne(
      {
        section: body.section,
        "sections.show": false,
      },
      { "sections.$": 1 }
    )
    const query = await Promise.all([section, filteredSections])
    const sectionWithFilteredSections = { ...query[0]._doc, sections: query[1]._doc.sections }
    res.json(sectionWithFilteredSections)
  } catch (e) {
    next(e)
  }
}

module.exports = getSections
