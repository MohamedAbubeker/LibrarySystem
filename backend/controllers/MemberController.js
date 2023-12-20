const Members = require("../models/MemberModel");


//get all Members
const getMembers = async (req, res) => {
    const allMembers = await Members.find({})
    res.status(200).json(allMembers)
}

//find one Member by First Name
const findMember = async (req, res) => {
    const Member = await Members.findOne({ FirstName: "mo" }).select(['email', 'city']);
    if (!Member) {
        res.status(400).json({ error: "Book not found" })
    }

    res.status(200).json(Member)
}

//create a new Member
const createMember = async (req, res) => {
    const Member = new Members({ firstName: req.body.firstName, lastName: req.body.lastName, city: req.body.city, email: req.body.email, gender: req.body.gender })
    try {
        await Member.save()
        res.status(200).json(Book)
    } catch (error) {
        res.status(400).json({ error: error.massage })
    }

}

//DELETE a Member
const deleteMember = async (req, res) => {
    const Member = await Members.findOneAndDelete({ FirstName: "gfdf" })
    if (!Member) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(Member)
}

//UPDATE a Member

const updateMember = async (req, res) => {
    const Member = await Members.findOneAndUpdate({ firstName: "Lorne" }, { firstName: "ali" })
    if (!Member) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(Member)
}

module.exports = ({
    getMembers,
    findMember,
    createMember,
    deleteMember,
    updateMember
})