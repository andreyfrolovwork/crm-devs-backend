const Router = require("express").Router
const router = new Router()
const { body } = require("express-validator")
const { getAparts } = require("../controllers/_getAparts.js")
const sendMessage = require("../controllers/_sendMessage.js")
const getSections = require("../controllers/_getSections.js")

router.post("/aparts", getAparts)
router.post("/send-message", sendMessage)
router.post("/sections", getSections)

module.exports = router
