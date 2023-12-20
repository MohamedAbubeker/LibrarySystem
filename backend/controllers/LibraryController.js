const Libraries = require("../models/LibraryModel");


//get all Library
const getLibraries = async (req, res) => {
    const allLibraries = await Libraries.find({})
    res.status(200).json(allLibraries)
}

//find one Library by Name
const findLibrary = async (req, res) => {
    const Library = await Libraries.findOne({ Title: "mo" }).select(['email', 'city']);
    if (!Library) {
        res.status(400).json({ error: "Book not found" })
    }

    res.status(200).json(Library)
}

//create a new Library
const createLibrary = async (req, res) => {
    const Library = new Libraries({ firstName: req.body.firstName, lastName: req.body.lastName, city: req.body.city, email: req.body.email, gender: req.body.gender })
    try {
        await Library.save()
        res.status(200).json(Library)
    } catch (error) {
        res.status(400).json({ error: error.massage })
    }

}

//DELETE a Library
const deleteLibrary = async (req, res) => {
    const Library = await Libraries.findOneAndDelete({ firstName: "gfdf" })
    if (!Book) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(Library)
}

//UPDATE a Library
const updateLibrary = async (req, res) => {
    const Library = await Libraries.findOneAndUpdate({ firstName: "Lorne" }, { firstName: "ali" })
    if (!Library) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(Library)
}

module.exports = ({
    getLibraries,
    findLibrary,
    createLibrary,
    deleteLibrary,
    updateLibrary
})