const models = require("../models/index.js")
const apartsParamsSchema = require("../models/joiApartsParams.js")
const { getIn, getMinMax, pagination } = require("../shared/helpers.js")

async function getAparts(req, res, next) {
  try {
    const { body } = req
    await apartsParamsSchema.validateAsync(body)
    const pag = pagination(body)
    const query = {
      ...getIn(body, "section"),
      ...getIn(body, "rooms"),
      ...getMinMax(body, "price"),
      ...getMinMax(body, "area"),
    }
    const aparts = await models.aparts.find(query).skip(pag.skip).limit(pag.limit)
    res.json(aparts)
  } catch (e) {
    next(e)
  }
}

module.exports.getAparts = getAparts
