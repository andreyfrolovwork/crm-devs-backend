const joi = require("joi")

const apartParamsSchema = joi.object({
  page: joi.number(),
  rowsPerPage: joi.number(),
  sortBy: joi.string(),
  orderBy: joi.any().valid("asc", "desc"),
  section: joi.array().items(joi.number()),
  rooms: joi.array().items(joi.number()),
  area: joi.array().items(joi.number()),
  price: joi.array().items(joi.number()),
  floor: joi.array().items(joi.number()),
})

module.exports = apartParamsSchema
