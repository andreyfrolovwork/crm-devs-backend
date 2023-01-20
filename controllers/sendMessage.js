const axios = require("axios")

async function sendMessage(req, res, next) {
  try {
    const { body } = req
    axios
      .post(
        `https://api.telegram.org/bot5873601303:AAEEx0tW9_VL4Xzz4Kwc3zWuuHq3XwTlYEU/sendMessage?chat_id=-865668132&text=${body.text}`
      )
      .then((r) => {
        if (r.status === 200) {
          res.json({
            message: "Успешно",
          })
        }
      })
  } catch (e) {
    next(e)
  }
}

module.exports = sendMessage
