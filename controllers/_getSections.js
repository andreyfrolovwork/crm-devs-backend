const models = require("../models/index.js")
const sectionParams = require("../models/joiSectionParams.js")
const soldClass = " sold"
const soldText = "Обьект продан"

async function getSections(req, res, next) {
  try {
    const { body } = req
    await sectionParams.validateAsync(body)
    const section = await models.section.findOne({
      num: body.section,
    })
    const sectionFiltered = {
      ...section._doc,
      sections: section.sections.filter(delNotShow).map(addSoldClassIfSolded),
    }
    res.json(sectionFiltered)
  } catch (e) {
    next(e)
  }
}

module.exports = getSections

const delNotShow = (el) => el.show
function addSoldClassIfSolded(el) {
  if (el.sold) {
    el.toolTipClass = el.toolTipClass + soldClass
    el.toolTipText = soldText
    return el
  } else {
    return el
  }
}
