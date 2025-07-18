const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    let user = await userModel.findOne({email: email});
    if(user) {
      return res.status(401).send("you already have account , please login.");
      return res.redirect("/");
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password:hash,
            fullname,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("user created successfully");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res){
  let {email, password} =req.body;

let user = await userModel.findOne({email: email});
if(!user) return res.send("Email or Password incorrect");

bcrypt.compare(password, user.password, function(err, result){
  if(result){
    let token = generateToken(user);
    res.cookie("token", token);
    res.redirect("/shop");
  }else
    return res.send("Email or Password incorrect");
});
}

module.exports.logout = function(req, res){
  res.cookie("token", "");
  res.redirect("/");
}