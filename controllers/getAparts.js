const apartsParamsSchema = require("../models/joiApartsParams.js")

const cookFilters = require("./cookFilters.js")
const { getQueryAparts } = require("./getQueryAparts.js")

async function getAparts(req, res, next) {
  try {
    const { body } = req
    await apartsParamsSchema.validateAsync(body)
    const result = await Promise.all([getQueryAparts(body), cookFilters(body)])
    const rowsAndFilters = {
      rows: result[0],
      filters: result[1],
    }
    console.log("get aparts query")
    res.json(rowsAndFilters)
  } catch (e) {
    next(e)
  }
}

module.exports.getAparts = getAparts
