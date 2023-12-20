const express = require("express");
const router = express.Router()
const {
    getReservations,
    findReservation,
    createReservation,
    deleteReservation,
    updateReservation
} = require('../controllers/ReservationController')



module.exports = router 

// Get all users
router.get('/getReservations' , getReservations)

//POST a new user
router.post('/findReservation' , findReservation)

//GET single user 
router.post('/createReservation' , createReservation)

//DELETE a user
router.delete('/deleteReservation' , deleteReservation)

//UPDATE a user
router.patch('/updateReservation' , updateReservation)


/* router.get('/:id' , (req, res) => {

    res.json({mssg: 'GET single user'})
}) */






