const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/prog2");
mongoose.Promise = global.Promise;

const Contacts = require("../models/user");
const getUserParams = (body) => 
{
    return {
            name: body.name,
            gender: body.gender,
    };
};


module.exports = 
{
    showIndex: (req, res) => 
    {
        console.log("Navigating to home page"); res.render("index")
    },

    showUsers: (req, res) => 
    {
        Contacts.find()
        .then(users => 
        {
            res.locals.users = users;
            console.log("Navigating to users page");
            res.render("users");
        })
        .catch(error => 
        {
            console.log(`Error fetching users: ${error.message}`);
            res.send(error);
        });
    },

    postSignUpForm: (req, res) => 
    {
        console.log("Navigating to addContacts page"); 
        res.render("contactForm")
    },

    addUsers: (req, res) => 
    {
        let userParams = getUserParams(req.body);
        Contacts.create(userParams)
        .then(user => 
        {
            console.log(`New user added: ${req.body.name} | ${req.body.gender}`)
            res.redirect("/users")
        })
        .catch(error => 
        {
            console.log(`Error saving user:${error.message}`);
            res.send(error);
        });
    }
}