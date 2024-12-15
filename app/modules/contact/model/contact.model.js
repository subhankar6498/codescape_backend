const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define contact schema
const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    lastQualification: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, timeseries: false }
);

const ContactModel = mongoose.model("contact", contactSchema);
module.exports = ContactModel;
