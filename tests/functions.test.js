const getFloor = require("../functions/addSection/functions.js").getFloor

describe("test linear functions", () => {
  test("should respond with a 401 code", async () => {
    expect(getFloor(0)).toBe(1)
    expect(getFloor(5)).toBe(1)
    expect(getFloor(9)).toBe(1)
    expect(getFloor(10)).toBe(2)
  })
})
