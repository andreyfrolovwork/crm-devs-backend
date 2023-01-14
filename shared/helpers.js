function getMinMax(body, property) {
  const result = {}
  if (body[property]) {
    result[property] = {
      $gte: body[property].min,
      $lte: body[property].max,
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
  let limit = 10,
    page = 1
  if (body.limit) {
    limit = body.limit
  }
  if (body.page) {
    page = body.page
  }
  const skip = body.page * body.limit - body.limit
  return {
    page,
    limit,
    skip,
  }
}

module.exports.getMinMax = getMinMax
module.exports.getIn = getIn
module.exports.getProp = getProp
module.exports.pagination = pagination
