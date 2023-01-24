const f = require("./start.js")
const models = require("../models/index.js")
f(test)

async function test() {
  /*  const created = await models.test.create({
    rooms: "1с",
  })
  debugger
  await created.save()
  debugger*/
  const find = await models.aparts.find({
    rooms: {
      $in: ["1с"],
    },
  })
  debugger
}
