const ApiError = require("../exceptions/api-error")
const joi = require("joi")
module.exports = function (err, req, res, next) {
  console.log(err)
  const stack = err.stack.split("/\n")
  stack.forEach((at) => {
    console.log(at)
  })
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors })
  }
  if (err instanceof joi.ValidationError) {
    return res.status(400).json({ message: err.message, details: err.details })
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" })
}
