var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the schema for our user model
var memberSchema = mongoose.Schema({
        user_id      : Schema.Types.ObjectId,
        proyect_id   : Schema.Types.ObjectId,
        name         : String,
        email        : String
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Member', memberSchema);
