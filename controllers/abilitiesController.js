const express = require('express');
const Ability = require('../models/ability');

function index(request, response, next) {

}

function create(request, response, next) {
  const name = request.body.name;
  const type = request.body.type;

  let ability = new Ability();
  ability.name = name;
  ability.type = type;

  ability.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'Abilidad no guardada',
        objs: {}
      });
    } else {
      response.render('profile', {
        title: "Profile",
        userName: request.user.local
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
