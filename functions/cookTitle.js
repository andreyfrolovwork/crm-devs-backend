function cookTitle(apart) {
  let roomsText
  if (apart.rooms === 1) {
    roomsText = "Однокомнатная "
  } else if (apart.rooms === 2) {
    roomsText = "Двухкомнатная "
  } else if (apart.rooms === 3) {
    roomsText = "Трехкомнатная "
  } else if (apart.rooms === 4) {
    roomsText = "Четырехкомнатная "
  }

  if (apart.type === "Студия") {
    return `${roomsText}студия №${apart.number}`
  } else if (apart.type === "Квартира") {
    return `${roomsText}квартира №${apart.number}`
  }
}

module.exports = cookTitle
