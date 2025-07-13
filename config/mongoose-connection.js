const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/E-COMMERCE_WEB") // No space in DB name
  .then(function() {
    console.log("MongoDB connected");
  })
  .catch(function(err) {
    console.error("Connection error:", err);
  });

  module.exports = mongoose.connection;
