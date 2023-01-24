const models = require("../models/index.js")
const floorParams = require("../models/joiFloorParams.js")

async function getFloors(req, res, next) {
  try {
    const { body } = req
    await floorParams.validateAsync(body)
    const apartOnFloor = await models.aparts
      .find({
        section: body.section,
        floor: body.floor,
      })
      .lean()
    const section = await models.section
      .find({
        num: "10" + body.section,
      })
      .lean()

    const sectionResult = section[0].sections
      .map((section, i) => {
        const apart = apartOnFloor.find((el) => el.planNum === i)
        if (apart.show) {
          section.apartId = apart._id
          if (apart.sold) {
            section.toolTipText = "Продано"
            return section
          } else {
            section.toolTipText = `Квартира № ${apart.number} ${apart.area2}м2 ${apart.price} рублей`
            return section
          }
        }
      })
      .filter((el) => el)
    section[0].sections = sectionResult
    res.json(section[0])
  } catch (e) {
    next(e)
  }
}

module.exports = getFloors
