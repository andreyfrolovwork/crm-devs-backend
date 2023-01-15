const models = require("../models/index.js")

async function getFilters() {
  return models.aparts.aggregate([
    {
      $group: {
        _id: null,
        sections: { $addToSet: "$section" },
        rooms: { $addToSet: "$rooms" },
        priceMax: { $max: "$price" },
        priceMin: { $min: "$price" },
        areaMax: { $max: "$area" },
        areaMin: { $min: "$area" },
        count: { $count: {} },
      },
    },
  ])
}

module.exports = getFilters
