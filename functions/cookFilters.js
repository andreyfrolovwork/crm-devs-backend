const getFilters = require("./getFilters.js")

async function cookFilters(body) {
  const filters = await getFilters()
  const bodyLimit = body.limit ? body.limit : 10
  const maxPage = Math.ceil(filters[0].count / bodyLimit)
  return {
    sections: filters[0].sections,
    rooms: filters[0].rooms,
    priceOutterValue: {
      min: filters[0].priceMin,
      max: filters[0].priceMax,
    },
    areaOutterValue: {
      min: filters[0].areaMin,
      max: filters[0].areaMax,
    },
    count: filters[0].count,
    page: body.page ? body.page : 1,
    maxPage: maxPage,
  }
}

module.exports = cookFilters
