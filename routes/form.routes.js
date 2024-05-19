const express = require("express");
const { Form } = require("../model/form.model");

const FormRouter = express.Router();

// ------------------post data-----------------------
FormRouter.post("/post", async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).send({ msg: "Successfully added to the database." });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error!", err });
  }
});

// ---------------------get data--------------------------
FormRouter.get("/", async (req, res) => {
  try {
    const data = await Form.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ msg: "Server error!", err });
  }
});

module.exports = { FormRouter };
