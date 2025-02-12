const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  countryCode: String,
  country: String,
  state: String,
  companyName: String,
  website: String,
  businessType: String,
  productOfInterest: [String],
  orderQuantity: String,
  yourBrand: String,
  packagingDetails: String,
  destinationPort: String,
  inquiry: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Inquiry", inquirySchema);
