const express = require("express");
const router = express.Router()
const {
    getLibraries,
    findLibrary,
    createLibrary,
    deleteLibrary,
    updateLibrary
} = require('../controllers/LibraryController')



module.exports = router 

// Get all users
router.get('/getLibraries' , getLibraries)

//POST a new user
router.post('/findLibrary' , findLibrary)

//GET single user 
router.post('/createLibrary' , createLibrary)

//DELETE a user
router.delete('/deleteLibrary' , deleteLibrary)

//UPDATE a user
router.patch('/updateLibrary' , updateLibrary)


/* router.get('/:id' , (req, res) => {

    res.json({mssg: 'GET single user'})
}) */






