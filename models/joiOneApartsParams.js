const joi = require("joi")

const oneApartParamsSchema = joi.object({
  _id: joi.string().required(),
})

module.exports = oneApartParamsSchema
