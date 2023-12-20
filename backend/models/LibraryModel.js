var express = require("express");
const mongoose = require('mongoose');

const librarySchema  = new mongoose.Schema({
    LibraryName: String,
    LibraryID: String,
    FirstName: String,
    LastName: String,
    Address: String,
    PhoneNumber: Number,
    Email: String

});

module.exports = mongoose.model('libraries', librarySchema);