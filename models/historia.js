var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var abilitySchema = mongoose.Schema({
        narrative : String,
        proyect_id : Schema.Types.ObjectId,
        state : String,
        priority : String,
        size : Number,
        how : String,
        what_i_want : String,
        so_that : String, //de_manera
        criteria : String,
        since : String,
        when : String,
        so : String
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Ability', abilitySchema);
