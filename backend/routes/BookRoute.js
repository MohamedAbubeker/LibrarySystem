const express = require("express");
const router = express.Router()
const {
    getBooks,
    findBook,
    createBook,
    deleteBook,
    updateBook
} = require('../controllers/BookController')



module.exports = router 

// Get all users
router.get('/getBooks' , getBooks)

//POST a new user
router.post('/findBook' , findBook)

//GET single user 
router.post('/createBook' , createBook)

//DELETE a user
router.delete('/deleteBook' , deleteBook)

//UPDATE a user
router.patch('/updateBook' , updateBook)


/* router.get('/:id' , (req, res) => {

    res.json({mssg: 'GET single user'})
}) */






