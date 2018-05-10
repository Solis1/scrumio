const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proyectSchema = Schema({
  nombre            : String,
  date_request      : String,
  date_deployed     : String,
  product_owner     : String,
  product_owner_id  : Schema.Types.ObjectId,
  description       : String
});

module.exports = mongoose.model('Proyect', proyectSchema);
