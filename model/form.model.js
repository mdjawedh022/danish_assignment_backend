const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    social_media: { type: String, required: true },
    followers: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);
const Form = mongoose.model("form", formSchema);

module.exports = { Form };
