const express = require("express");
const router = express.Router()
const {
    getMembers,
    findMember,
    createMember,
    deleteMember,
    updateMember
} = require('../controllers/MemberController')



module.exports = router 

// Get all Members
router.get('/getMembers' , getMembers)

//POST a new Member
router.post('/findMember' , findMember)

//GET single Member 
router.post('/createMember' , createMember)

//DELETE a Member
router.delete('/deleteMember' , deleteMember)

//UPDATE a Member
router.patch('/updateMember' , updateMember)


/* router.get('/:id' , (req, res) => {

    res.json({mssg: 'GET single user'})
}) */












