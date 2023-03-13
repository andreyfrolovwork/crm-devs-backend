function getFloor(i) {
  const num = i + 1
  const i10 = Math.floor(i / 10)
  const result = num - i10 * 10
  return result
}

function getSection(i) {
  const result = Math.floor(i / 10) + 1
  return result
}

module.exports.getFloor = getFloor
module.exports.getSection = getSection
