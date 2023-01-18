function getSort(body) {
  const result = {}
  if (body.sortBy && body.orderBy) {
    if (body.orderBy === "asc") {
      result[body.sortBy] = 1
    }
    if (body.orderBy === "desc") {
      result[body.sortBy] = -1
    }
  }
  return result
}

function getMinMax(body, property) {
  const result = {}
  if (body[property]) {
    result[property] = {
      $gte: body[property][0],
      $lte: body[property][1],
    }
  }
  return result
}

function getIn(body, property) {
  const result = {}
  if (body[property]) {
    result[property] = {
      $in: body[property],
    }
  }
  return result
}

function getProp(body, property) {
  const result = {}
  if (body[property]) {
    result[property] = body[property]
  }
  return result
}

function pagination(body) {
  let rowsPerPage = 10,
    page = 1
  if (body.rowsPerPage) {
    rowsPerPage = body.rowsPerPage
  }
  if (body.page) {
    page = body.page
  }
  const skip = body.page * body.rowsPerPage - body.rowsPerPage
  return {
    page,
    rowsPerPage,
    skip,
  }
}

module.exports.getSort = getSort
module.exports.getMinMax = getMinMax
module.exports.getIn = getIn
module.exports.getProp = getProp
module.exports.pagination = pagination
