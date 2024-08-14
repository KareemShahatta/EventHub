const mongoose = require ("mongoose");
var usersSchema = mongoose.Schema( 
{
    name: String,
    gender: String
} );

module.exports = mongoose.model( 'Contact', usersSchema );