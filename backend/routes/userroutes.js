const express = require("express");
const router = express.Router()
const {
    createUser,
    getUsers,
    findUser,
    deleteUser,
    updateUser
} = require('../controllers/usercontroller')


/* [{"firstName":"ali","lastName":"Duffield","city":"London","email":"lduffield0@washingtonpost.com","gender":"Male"},
{"firstName":"Kaitlyn","lastName":"Gossage","city":"London","email":"kgossage1@nasa.gov","gender":"Female"},
{"firstName":"Kevina","lastName":"Baggallay","city":"London","email":"kbaggallay2@washington.edu","gender":"Female"},
{"firstName":"Jolene","lastName":"Pinnock","city":"London","email":"jpinnock3@boston.com","gender":"Female"}]
 */

module.exports = router 

// Get all users
router.get('/getUsers' , getUsers)

//POST a new user
router.post('/createUser' , createUser)

//GET single user 
router.post('/findUser' , findUser)

//DELETE a user
router.delete('/deleteUser' , deleteUser)

//UPDATE a user
router.patch('/updateUser' , updateUser)


/* router.get('/:id' , (req, res) => {

    res.json({mssg: 'GET single user'})
}) */






