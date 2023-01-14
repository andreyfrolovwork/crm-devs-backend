const joi = require("joi");

const apartParamsSchema = joi.object({
  page: joi.number(),
  limit: joi.number(),
  section: joi.number(),
  rooms: joi.array().items(joi.number()),
  areaMin: joi.number(),
  areaMax: joi.number(),
  priceMin: joi.number(),
  priceMax: joi.number(),
});

module.exports = apartParamsSchema;
