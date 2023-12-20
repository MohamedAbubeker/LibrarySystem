const express = require("express");
const lessonsRoutes = require('../models/lessonsmodule')



const router = express.Router()



module.exports = router(); 

// Get all lessons
router.get('/' , (req, res) => {

    res.json({mssg: 'GET all lessons'})
})

//GET single lesson 
router.get('/:id' , (req, res) => {

    res.json({mssg: 'GET single lesson'})
})

//POST a new lesson
router.post('/' , (req, res) => {

    res.json({mssg: 'POST a new lesson'})
})

//DELETE a lesson
router.delete('/:id' , (req, res) => {

    res.json({mssg: 'DELETE a lesson'})
})

//UPDATE a lesson
router.patch('/:id' , (req, res) => {

    res.json({mssg: 'UPDATE a lesson'})
})
