require("dotenv").config();

const mongoose = require("mongoose");
const { readFile } = require("node:fs/promises");
const models = require("../models/index.js");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
const setPrice = (apart) => {
  if (apart.rooms === 1) {
    apart.price = getRandomInt(1600000, 1945000);
  }
  if (apart.rooms === 2) {
    apart.price = getRandomInt(1945000, 2850000);
  }
  if (apart.rooms === 3) {
    apart.price = getRandomInt(2850000, 3845000);
  }
  if (apart.rooms === 4) {
    apart.price = getRandomInt(3845000, 4845000);
  }
  if (apart.rooms === 0) {
    apart.price = getRandomInt(1600000, 1945000);
  }
  return apart;
};
const savePrice = (apart) => {
  return apart.save();
};

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });

    const aparts = await models.aparts.find({});
    const apartsWithPrice = aparts.map(setPrice).map(savePrice);
    const result = await Promise.all(apartsWithPrice);

    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }
};
start();
