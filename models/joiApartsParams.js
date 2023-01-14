const joi = require("joi");

const apartParamsSchema = joi.object({
  page: joi.number(),
  limit: joi.number(),
  section: joi.array().items(joi.number()),
  rooms: joi.array().items(joi.number()),
  area: {
    min: joi.number(),
    max: joi.number(),
  },
  price: {
    min: joi.number(),
    max: joi.number(),
  },
});

module.exports = apartParamsSchema;
