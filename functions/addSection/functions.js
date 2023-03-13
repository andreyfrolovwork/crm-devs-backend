function getFloor(i) {
  const result = Math.floor(i / 10) + 1
  return result
}

function getSection(i) {
  if (i < 10) {
    return 1
  } else {
    return 2
  }
}

module.exports.getFloor = getFloor
module.exports.getSection = getSection
