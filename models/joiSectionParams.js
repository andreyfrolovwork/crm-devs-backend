const joi = require("joi")
const sectionParams = joi.object({
  section: joi.alternatives().try(joi.number(), joi.string()).required(),
})
module.exports = sectionParams
