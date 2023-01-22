const models = require("../models/index.js")
const joi = require("joi")
const sectionParams = require("../models/joiSectionParams.js")

async function getSections(req, res, next) {
  try {
    const { body } = req
    await sectionParams.validateAsync(body)
    const sections = await models.section.find({
      section: body.section,
    })
    res.json(sections[0])
  } catch (e) {
    next(e)
  }
}

module.exports = getSections
