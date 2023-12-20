const Books = require("../models/BookModel");
const Authors = require("../models/AuthorModel");


//get all users
const getUsers = async (req, res) => {
    const allUsers = await users.find({})
    res.status(200).json(allUsers)
}

//find one user by first name 
const findUser = async (req, res) => {
    const user = await users.findOne({ firstName: "mo" }).select(['email', 'city']);
    if (!user) {
        res.status(400).json({ error: "user not found" })
    }

    res.status(200).json(user)
}

//create a new user 
const createUser = async (req, res) => {
    const user = new users({ firstName: req.body.firstName, lastName: req.body.lastName, city: req.body.city, email: req.body.email, gender: req.body.gender })
    try {
        const newuser = await user.save()
        res.status(200).json(newuser)
    } catch (error) {
        res.status(400).json({ error: error.massage })
    }

}

//DELETE a user
const deleteUser = async (req, res) => {
    const user = await users.findOneAndDelete({ firstName: "gfdf" })
    if (!user) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(user)
}

//UPDATE a user

const updateUser = async (req, res) => {
    const user = await users.findOneAndUpdate({ firstName: "Lorne" }, { firstName: "ali" })
    if (!user) {
        res.status(400).json({ error: "user not found" })
    }
    res.status(200).json(user)
}




// Function to search for documents with a specific string or substring in AuthorID
async function searchByAuthorNameSubstring(searchString) {
  try {
    // Use a regular expression to find documents where AuthorID contains the specified string or substring
    const result = await Books.find({ Authors: { $regex: searchString, $options: 'i' } });

    return result;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    throw new Error('Error searching for AuthorID substring');
  }
}

// Example usage:
const searchString = 'substring'; // Replace 'substring' with the string or substring you want to search for

searchByAuthorNameSubstring(searchString)
  .then((result) => {
    console.log('Matching documents:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });












module.exports = ({
    createUser,
    getUsers,
    findUser,
    deleteUser,
    updateUser
})