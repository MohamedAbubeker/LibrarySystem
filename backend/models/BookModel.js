var express = require("express");
const mongoose = require('mongoose');

const bookSchema  = new mongoose.Schema({
    ISBN: Number,
    Title: String,
    Authors: String,
    Category: String,
    AvailableCopies: Number,
    LibraryID: String,
    Status: Boolean 

});

module.exports = mongoose.model('books', bookSchema);