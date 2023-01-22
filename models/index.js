const tokens = require("./token-model.js")
const users = require("./UserModel.js")
const aparts = require("./Apartment.js")
const chatmes = require("./ChatMessage.js")
const section = require("./sectionSchema.js")
const models = {
  users,
  tokens,
  aparts,
  chatmes,
  section,
}
module.exports = models
