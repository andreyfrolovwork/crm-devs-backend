const { pagination, getIn, getMinMax } = require("../shared/helpers.js")
const models = require("../models/index.js")

async function getQueryAparts(body) {
  const pag = pagination(body)
  const query = {
    ...getIn(body, "section"),
    ...getIn(body, "rooms"),
    ...getMinMax(body, "price"),
    ...getMinMax(body, "area"),
  }
  return models.aparts.find(query).skip(pag.skip).limit(pag.limit)
}

module.exports = getQueryAparts
