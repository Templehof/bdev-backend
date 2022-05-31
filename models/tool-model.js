const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
  },
  scienceURL: {
    type: [Object],
  },
  quote: {
    type: String,
  },
  toolType: {
    type: [String],
    required: true,
  },
  toolImage: {
    type: String,
  },
});

const Tool = mongoose.model("Tool", toolSchema);
module.exports = Tool;
