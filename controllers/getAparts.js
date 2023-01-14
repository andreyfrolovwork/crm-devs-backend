const models = require("../models/index.js");
const apartsParamsSchema = require("../models/joiApartsParams.js");

async function getAparts(req, res, next) {
  try {
    const { body } = req;
    await apartsParamsSchema.validateAsync(body);

    const aparts = await models.aparts.find({
      /*      price: {
        $gte: query.minPrice,
        $lte: query.maxPrice,
      },*/
    });
    res.json(aparts);
  } catch (e) {
    next(e);
  }
}

module.exports.getAparts = getAparts;
