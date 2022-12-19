const express = require("express");
const router = express.Router();
const Parameters = require("../models/Parameters")
const CryptoJs = require("crypto-js");


router.post("/add", async (req, res) => {
  const newParameter = new Parameters(req.body);
  try {
    await newParameter.save();
    res.status(201).json(newParameter);
  } catch (error) {
    // We will come to this latter
    console.log(error);
  }
});

// ----------------------Find a Patient from database ----------------
router.get("/find/:id", async (req, res) => {
  try {
    const reqParameter = await Parameters.findById(req.params.id);
    res.status(200).json(reqParameter);
  } catch (error) {
    // We will come to the error page later
    res.status(500).json(error);
  }
});

// ----------------------Get all Patients from database ----------------
router.get("/patient/all", async (req, res) => {
  try {
    const allParameters = await Parameters.find();
    res.status(200).json(allParameters);
  } catch (error) {
    // We will come to the error page later
    res.status(500).json(error);
  }
});


module.exports = router;