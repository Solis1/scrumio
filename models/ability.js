var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// define the schema for our user model
var abilitySchema = mongoose.Schema({
        name         : String,
        user_id      : Schema.Types.ObjectId,
        type         : String
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Ability', abilitySchema);
