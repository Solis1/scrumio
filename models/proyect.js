const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const proyectSchema = Schema({
  nombre            : String,
  date_request      : String,
  date_deployed     : String,
  product_owner     : String,
  product_owner_id  : {type: Schema.Types.ObjectId, ref: 'User'},
  description       : String
});

schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Proyect', proyectSchema);
