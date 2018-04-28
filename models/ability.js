var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var abilitySchema = mongoose.Schema({
        name         : String,
        type        : String
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Ability', abilitySchema);
