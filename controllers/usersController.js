const express = require('express');
const Ability = require('../models/ability');
const mongoose = require('mongoose');

function index(request, response, next) {
  var abilities_db;
  Ability.find({"user_id": mongoose.Types.ObjectId(request.user._id)}, function(err, docs){
    if(err){
      abilities_db = null;
    }else{
      abilities_db = docs;
      response.render('profile', {
        title: "Profile",
        userName: request.user.local,
        abilities: abilities_db
      });
    }
  });

}

function create(request, response, next) {

}

function update(request, response, next) {

}

function remove(request, response, next) {

}

module.exports = {
  index,
  create,
  update,
  remove
}
