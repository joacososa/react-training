
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Ingrese el nombre de usuario'
  },
  description: {
    type: String,
    required: 'Ingrese el nombre de usuario'
  },
  imageUrl: {
    type: String,
    required: 'Ingrese el nombre de usuario'
  },
});

module.exports = mongoose.model('Products', ProductSchema);