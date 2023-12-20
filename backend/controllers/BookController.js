const Books = require("../models/BookModel");


//get all Books
const getBooks = async (req, res) => {
    const allBooks = await Books.find({})
    res.status(200).json(allBooks)
}

//find one Book by Title
const findBook = async (req, res) => {
    const Book = await Books.findOne({ Title: "mo" }).select(['email', 'city']);
    if (!Book) {
        res.status(400).json({ error: "Book not found" })
    }

    res.status(200).json(Book)
}

//create a new Book
const createBook = async (req, res) => {
    const Book = new Books({ firstName: req.body.firstName, lastName: req.body.lastName, city: req.body.city, email: req.body.email, gender: req.body.gender })
    try {
        await Book.save()
        res.status(200).json(Book)
    } catch (error) {
        res.status(400).json({ error: error.massage })
    }

}

//DELETE a Book
const deleteBook = async (req, res) => {
    const Book = await Books.findOneAndDelete({ firstName: "gfdf" })
    if (!Book) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(Book)
}

//UPDATE a Book

const updateBook = async (req, res) => {
    const Book = await Books.findOneAndUpdate({ firstName: "Lorne" }, { firstName: "ali" })
    if (!Book) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(Book)
}

module.exports = ({
    getBooks,
    findBook,
    createBook,
    deleteBook,
    updateBook
})