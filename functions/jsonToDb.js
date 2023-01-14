require("dotenv").config();

const mongoose = require("mongoose");
const { readFile } = require("node:fs/promises");
const models = require("../models/index.js");

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    const contents = await readFile("./apartData.json", { encoding: "utf8" });
    let text = contents.slice(1);
    const json = JSON.parse(text);

    /*await models.aparts.insertMany(json);*/
    let aparts = await models.aparts.find({});
    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }
};
start();
