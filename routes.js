const express = require("express");
const router = express.Router();
const axios = require("axios");
const DataObject = require("./models/dataObjectModel");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orcestra-new?retryWrites=true&w=majority"
);

router.get("/psets", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.orcestra.ca/api/psets/canonical"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/psets-database", async (req, res) => {
  try {
    const dataObjects = await DataObject.find({});
    res.status(200).json(dataObjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
