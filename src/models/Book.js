const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Book", bookSchema);
