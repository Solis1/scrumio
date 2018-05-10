var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var abilitySchema = mongoose.Schema({
        narrativa : String,
        proyect_id : Schema.Types.ObjectId,
        state : String,
        prioridad : String,
        size : Number,
        como_realizar : String,
        quiero_tener : String,
        de_manera : String,
        criterios_aceptacion : String,
        dado_que : String,
        cuando : String,
        entonces : String
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Ability', abilitySchema);
