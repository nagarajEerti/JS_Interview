"use strict";

const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const GeoCodeSchema = new mongoose.Schema({
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
});

const LocationSchema = new mongoose.Schema({
    type: { type: String, required: false },
    coordinates: { type: Array, required: false },
});

const OrderSchema = new mongoose.Schema(
    {
        orderId: { type: Number, required: false, default: 0 },
        pickupTime: { type: Number, required: false, default: "" },
        pickupDate: { type: Number, required: false, default: "" },
        dropoffTime: { type: Number, required: false, default: "" },
        dropoffDate: { type: Number, required: false, default: "" },
        firstLineAddress: { type: String, required: false },
        secondLineAddress: { type: String, required: false },
        businessCity: { type: String, required: false },
        businessState: { type: String, required: false },
        businessPostal: { type: String, required: false },
        businessCountry: { type: String, required: false },
        zipCode: { type: String, required: false },
        geoCode: GeoCodeSchema,
        location: LocationSchema,
        totalAmount: { type: Number, required: false, default: 0 },
        payoutAmount: { type: Number, required: false, default: 0 },
        speedLimit: { type: Number, required: false, default: "" },
        kmsLimit: { type: Number, required: false, default: "" },
        coupon: { type: String, required: false, default: "" },
        ownerId: { type: mongoose.Types.ObjectId, ref: "Owner" },
        userId: { type: mongoose.Types.ObjectId, ref: "Tenant" },
        serviceId: { type: objectId, ref: "Service" },
        serviceType: { type: String, required: false },
        status: { type: String, enum: ["Pending", "Inprogress", "Accept", "Complete"], default: "Pending" },
        subServiceType: { type: String, required: false, default: "" },
        date: { type: Number, required: false },
        deposit:{type: Number, required: false, default: 0 }
        // createdBy: { type: objectId, ref: "User" },
        // updatedBy: { type: objectId, ref: "Owner" },
    },
    { timestamps: true, versionKey: false }
);

OrderSchema.pre("save", async function (next) {
    next();
});

module.exports = mongoose.model("Orders", OrderSchema);