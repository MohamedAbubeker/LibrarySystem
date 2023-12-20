var express = require("express");
const mongoose = require('mongoose');

const memberSchema  = new mongoose.Schema({
    MemberID: String,
    FirstName: String,
    LastName: String,
    Address: String,
    PhoneNumber: Number,
    Email: String,
});

module.exports = mongoose.model('members', memberSchema);