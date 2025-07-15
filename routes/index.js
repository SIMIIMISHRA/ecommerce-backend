const express = require("express");
const router = express.Router();
const { logout } = require("../controllers/authController")
const isLoggedin = require("../middlewares/isLoggedin");

const userModel = require("../models/user-model");
const productModel = require("../models/product-model");

router.get("/", function(req,res){
    let error = req.flash("error");
    res.render("index",{ error, loggedin: false }); 
});

router.get("/shop", isLoggedin, async function(req,res){
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", {products, success});
});
router.get("/cart", isLoggedin, async function(req, res){
    let user = await userModel
        .findOne({ email: req.user.email })
        .populate("cart");
    const bill = user.cart.price+20-user.cart.discount;
    res.render("cart", { user, bill });
})

router.get("/addtocart/:productId", isLoggedin, async function(req, res){
    let user = await userModel.findOne({ email: req.user.email });

    user.cart = req.params.productId;
    await user.save();
    req.flash("success", "Added to cart");
    res.redirect("/shop");
});

router.get("/logout", isLoggedin, logout);

module.exports = router;