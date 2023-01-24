const tokens = require("./mongoTokenSchema.js")
const users = require("./mongoUserSchema.js")
const aparts = require("./mongoApartmentsSchema.js")
const chatmes = require("./mongoChatMessageSchema.js")
const section = require("./mongoSectionSchema.js")
const test = require("./mongoTestSchema.js")
const models = {
  users,
  tokens,
  aparts,
  chatmes,
  section,
  test,
}
module.exports = models
