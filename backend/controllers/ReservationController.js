const Reservation = require("../models/ReservationModel");


//get all Reservation
const getReservations = async (req, res) => {
    const allReservations = await Reservation.find({})
    res.status(200).json(allReservations)
}

//find one user by first name 
const findReservation = async (req, res) => {
    const reservation = await Reservation.findOne({ firstName: "mo" }).select(['email', 'city']);
    if (!reservation) {
        res.status(400).json({ error: "user not found" })
    }

    res.status(200).json(reservation)
}

//create a new user 
const createReservation = async (req, res) => {
    const reservation = new Reservation({ firstName: req.body.firstName, lastName: req.body.lastName, city: req.body.city, email: req.body.email, gender: req.body.gender })
    try {
        const newReservation = await Reservation.save()
        res.status(200).json(newReservation)
    } catch (error) {
        res.status(400).json({ error: error.massage })
    }

}

//DELETE a user
const deleteReservation = async (req, res) => {
    const reservation = await Reservation.findOneAndDelete({ firstName: "gfdf" })
    if (!reservation) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(reservation)
}

//UPDATE a user

const updateReservation = async (req, res) => {
    const reservation = await Reservation.findOneAndUpdate({ firstName: "Lorne" }, { firstName: "ali" })
    if (!reservation) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(reservation)
}

module.exports = ({
    getReservations,
    findReservation,
    createReservation,
    deleteReservation,
    updateReservation
})