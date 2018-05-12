const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema({
  nombre            : String,
  date_request      : String,
  date_deployed     : String,
  product_owner     : String,
  product_owner_id  : {type: Schema.Types.ObjectId, ref: 'User'},
  description       : String
});

module.exports = mongoose.model('Project', projectSchema);
