const apartsParamsSchema = require("../models/joiApartsParams.js")
const getQueryAparts = require("../functions/getQueryAparts.js")
const cookFilters = require("../functions/cookFilters.js")

async function getAparts(req, res, next) {
  try {
    const { body } = req
    await apartsParamsSchema.validateAsync(body)
    const result = await Promise.all([getQueryAparts(body), cookFilters(body)])
    const rowsAndFilters = {
      rows: result[0],
      filters: result[1],
    }
    res.json(rowsAndFilters)
  } catch (e) {
    next(e)
  }
}

module.exports.getAparts = getAparts
