const mongoose = require("mongoose");

var tenantSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    score: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    role: {
      type: Number,
      default: 2,
    },
    email: {
      type: String,
    },
    dob: {
      type: String,
    },
    isNewTenant: {
      type: Boolean,
      default: true,
    },
    sessionToken: {
      type: String,
    },
    rentalID: {
      type: Number,
      unique: true,
    },
    address: {
      type: Object,
    },
    gender: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: true
    },
    age: { type: Number },
    nationality: { type: String },
    native: { type: String },
    maritalStatus: { type: String },
    profilePic: { type: String },
    isProofsAdded: { type: Boolean, default: false },
    PAN_verification: { type: Boolean, default: false },
    aadhaar_verification: { type: Boolean, default: false },
    aadhaar: { type: Number, length: 12,},
    deviceToken: { type: String }
  },
  {
    timestamps: true,
    versionKey: false,
    strict: true,
  }
);

module.exports = mongoose.model("Tenants", tenantSchema, "Tenants");