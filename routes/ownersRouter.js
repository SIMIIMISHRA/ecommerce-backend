const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
const productModel = require("../models/product-model");
const multer = require("multer");

// Multer setup for file upload (store in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(503)
        .send("you don't have permission to create a new owner.");
    }

    let {fullname, email, password} =req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(createdOwner);
    
  });
}

router.get("/admin", function (req, res) {
  //res.send("createproducts")
  let success = req.flash("success");
  res.render("createproducts", { success });
});

router.post("/product/create", upload.single("image"), async function (req, res) {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    const newProduct = await productModel.create({
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      image: req.file?.buffer, // <-- Save image to DB
    });

    req.flash("success", "Product created successfully!");
    res.redirect("/owners/admin");
  } catch (err) {
    console.error(err);
    res.status(500).send("Product creation failed.");
  }
});
module.exports = router;
