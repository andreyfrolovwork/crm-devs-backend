const getFloor = require("../functions/addSection/functions.js").getFloor
const getSection = require("../functions/addSection/functions.js").getSection

describe("test linear functions", () => {
  test("getFloor", async () => {
    expect(getFloor(0)).toBe(1)
    expect(getFloor(5)).toBe(6)
    expect(getFloor(9)).toBe(10)
    expect(getFloor(10)).toBe(1)
  })
  test("getSection", async () => {
    expect(getSection(0)).toBe(1)
    expect(getSection(5)).toBe(1)
    expect(getSection(9)).toBe(1)
    expect(getSection(10)).toBe(2)
  })
})
