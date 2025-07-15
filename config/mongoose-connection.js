const mongoose = require("mongoose");
const config = require("config");

const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/E-COMMERCE_WEB`) // No space in DB name
  .then(function () {
    dbgr("MongoDB connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
