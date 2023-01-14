const authRouter = require("./authRouter.js");
const apartRouter = require("./apartRouter.js");

module.exports = (app) => {
  app.use("/api", authRouter);
  app.use("/api", apartRouter);
};
