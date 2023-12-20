var express = require("express");
const mongoose = require('mongoose');

const reservationSchema  = new mongoose.Schema({
    ReservationID: String,
    MemberID: String,
    ReservationDate: Date,
    DueDate: Date,
    ISBN: Number,
    LibraryID: String,
    fee: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('reservations', reservationSchema);