const express = require('express');
const Ability = require('../models/ability');
const mongoose = require('mongoose');

function index(request, response, next) {

}

function create(request, response, next) {
  const name = request.body.name;
  const type = request.body.type;
  const user_id = request.user._id;

  let ability = new Ability();
  ability.name = name;
  ability.user_id = user_id;
  ability.type = type;

  ability.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'Abilidad no guardada',
        objs: err
      });
    } else {
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
  });

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
