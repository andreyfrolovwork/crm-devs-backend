const getFilters = require("./getFilters.js")
const { getCount } = require("./getQueryAparts.js")

async function cookFilters(body) {
  const filters = await getFilters()
  const count = await getCount(body)
  const bodyLimit = body.limit ? body.limit : 10
  const maxPage = Math.ceil(filters[0].count / bodyLimit)
  return {
    sections: filters[0].sections,
    rooms: filters[0].rooms,
    floorRange: [filters[0].floorMin, filters[0].floorMax],
    priceRange: [filters[0].priceMin, filters[0].priceMax],
    areaRange: [filters[0].areaMin, filters[0].areaMax],
    maxCount: filters[0].count,
    count: count,
    page: body.page ? body.page : 1,
    maxPage: maxPage,
  }
}

module.exports = cookFilters
