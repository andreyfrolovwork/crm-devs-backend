const Router = require("express").Router
const router = new Router()
const { body } = require("express-validator")
const { getAparts } = require("../controllers/getAparts.js")
const sendMessage = require("../controllers/sendMessage.js")

router.post("/aparts", getAparts)
router.post("/send-message", sendMessage)

module.exports = router
