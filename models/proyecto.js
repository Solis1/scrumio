const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const proyectoSchema = Schema({
  nombre            : String,
  date_request      : String,
  date_deployed     : String,
  product_owner     : String,
  product_owner_id  : Schema.Types.ObjectId,
  description       : String
});

proyectoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Proyecto', proyectoSchema);
