const Router = require("express").Router
const router = new Router()
const { body } = require("express-validator")
const { getAparts } = require("../controllers/_getAparts.js")
const sendMessage = require("../controllers/_sendMessage.js")
const getSections = require("../controllers/_getSections.js")
const getFloors = require("../controllers/_getFloors.js")
const { _getOneAparts } = require("../controllers/_getOneApart.js")

router.post("/aparts", getAparts)
router.post("/oneapart", _getOneAparts)
router.post("/send-message", sendMessage)
router.post("/sections", getSections)
router.post("/floors", getFloors)

module.exports = router
