const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function(req, res){
    res.send("hey");
})

app.get("/create", function(req, res){
    let user = await userModel.create({
        username: "simi",
        age: 22,
        email:"simimishra@gmail.com"
    })
})


appp.listen(3000);