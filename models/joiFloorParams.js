const joi = require("joi")
const floorParams = joi.object({
  section: joi.alternatives().try(joi.number(), joi.string()).required(),
  floor: joi.alternatives().try(joi.number(), joi.string()).required(),
})
module.exports = floorParams
