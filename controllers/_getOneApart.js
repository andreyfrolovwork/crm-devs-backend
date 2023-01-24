const oneApartParamsSchema = require("../models/joiOneApartsParams.js")
const models = require("../models/index.js")

async function _getOneAparts(req, res, next) {
  try {
    const { body } = req
    await oneApartParamsSchema.validateAsync(body)
    const apart = await models.aparts.findOne({
      _id: body._id,
    })
    res.json(apart)
  } catch (e) {
    next(e)
  }
}

module.exports._getOneAparts = _getOneAparts
