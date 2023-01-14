const models = require("../models/index.js")
const apartsParamsSchema = require("../models/joiApartsParams.js")
const { getIn, getMinMax } = require("../shared/helpers.js")

function pagination(body) {
  let limit = 10,
    page = 1
  if (body.limit) {
    limit = body.limit
  }
  if (body.page) {
    page = body.page
  }
  const skip = body.page * body.limit - body.limit
  return {
    page,
    limit,
    skip,
  }
}

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
