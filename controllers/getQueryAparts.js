const { pagination, getIn, getMinMax, getSort } = require("../shared/helpers.js")
const models = require("../models/index.js")
const cookQuery = require("./cookQuery.js")

async function getCount(body) {
  const query = cookQuery(body)
  return models.aparts.countDocuments(query)
}

async function getQueryAparts(body) {
  const pag = pagination(body)
  const sort = getSort(body)
  const query = cookQuery(body)

  return models.aparts.find(query).skip(pag.skip).limit(pag.rowsPerPage).sort(sort)
}

module.exports.getQueryAparts = getQueryAparts
module.exports.getCount = getCount
