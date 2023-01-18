const { pagination, getIn, getMinMax, getSort } = require("../shared/helpers.js")
const models = require("../models/index.js")

async function getQueryAparts(body) {
  const pag = pagination(body)
  const sort = getSort(body)
  const query = {
    ...getIn(body, "section"),
    ...getIn(body, "rooms"),
    ...getMinMax(body, "price"),
    ...getMinMax(body, "area"),
    ...getMinMax(body, "floor"),
  }
  return models.aparts.find(query).skip(pag.skip).limit(pag.rowsPerPage).sort(sort)
}

module.exports = getQueryAparts
