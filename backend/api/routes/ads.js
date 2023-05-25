const router = require("express").Router();
const Ads = require("../models/Ads");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newAds = new Ads(req.body);
    try {
      const savedAds = await newAds.save();
      res.status(201).json(savedAds);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;