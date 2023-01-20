const { getIn, getMinMax } = require("../shared/helpers.js")

function cookQuery(body) {
  return {
    ...getIn(body, "section"),
    ...getIn(body, "rooms"),
    ...getMinMax(body, "price"),
    ...getMinMax(body, "area"),
    ...getMinMax(body, "floor"),
  }
}

module.exports = cookQuery
