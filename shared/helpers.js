function getMinMax(body, property) {
  const result = {};
  if (body[property]) {
    result[property] = {
      $gte: body[property].min,
      $lte: body[property].max,
    };
  }
  return result;
}

function getIn(body, property) {
  const result = {};
  if (body[property]) {
    result[property] = {
      $in: body[property],
    };
  }
  return result;
}

function getProp(body, property) {
  const result = {};
  if (body[property]) {
    result[property] = body[property];
  }
  return result;
}

module.exports.getMinMax = getMinMax;
module.exports.getIn = getIn;
module.exports.getProp = getProp;
