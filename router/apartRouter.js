const Router = require("express").Router
const router = new Router()
const { body } = require("express-validator")
const { getAparts } = require("../controllers/getAparts.js")

router.post("/aparts", getAparts)

/*
router.get(
    "/apart",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    userController.registration
);
*/

module.exports = router
