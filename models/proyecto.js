const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const proyectoSchema = Schema({
  nombre : String
});

proyectoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Proyecto', proyectoSchema);
