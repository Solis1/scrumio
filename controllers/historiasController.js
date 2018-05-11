const express = require('express');
const mongoose = require('mongoose');
const Historia = require('../models/historia');

function create(req, res, next){
  const narrative = req.body.narrative;
  // Aquí va el Product Owner
  const state = req.body.state;
  const priority = req.body.priority;
  const size = req.body.size;
  const how = req.body.how;
  const what_i_want = req.body.what_i_want;
  const so_that = req.body.so_that;
  const criteria = req.body.criteria;
  const since = req.body.since;
  const when = req.body.when;
  const so = req.body.so;

  let historia = new Historia();

  historia.narrative = narrative;
  // Aquí va el Product Owner
  historia.state = state;
  historia.priority = priority;
  historia.size = size;
  historia.how = how;
  historia.what_i_want = what_i_want;
  historia.so_that = so_that;
  historia.criteria = criteria;
  historia.since = since;
  historia.when = when;
  historia.so = so;

  historia.save((err, historia)=>{
    if (err) {
      res.json({
        err: true,
        message: 'No se pudo guardar historia',
        objs: {}
      });
    }else{
      res.json({
        err: false,
        message:'Historia guardada',
        objs:historia
      });
    }
  });
}

function index(req, res, next){
  const page = req.params.page ? req.params.page : 1;
  Historia.paginate({}, {
    page: page,
    limit:3
  }, (err, historia)=>{
    if(err){
      res.json({
        err: true,
        message: 'No se pudo listar proyectos',
        objs: {}
      });
    }else{
      res.json({
        err: false,
        message:'Lista de proyectos',
        objs:historia
      });
    }
  });
}

//FindById
function show(req, res, next){
  const id = req.params.id;
  Proyecto.findOne({
    _id:id
  }, (err, obj)=>{
    res.json({
      err: true,
      message : 'Historia',
      obj: obj
    });
  });
}

function update(request, response, next) {
  const narrative = req.body.narrative;
  // Aquí va el Product Owner
  const state = req.body.state;
  const priority = req.body.priority;
  const size = req.body.size;
  const how = req.body.how;
  const what_i_want = req.body.what_i_want;
  const so_that = req.body.so_that;
  const criteria = req.body.criteria;
  const since = req.body.since;
  const when = req.body.when;
  const so = req.body.so;

  Historia.findOne({
    _id: mongoose.Types.ObjectId(request.params.id)
  }, function (err, historia){
    historia.narrative = narrative;
    // Aquí va el Product Owner
    historia.state = state;
    historia.priority = priority;
    historia.size = size;
    historia.how = how;
    historia.what_i_want = what_i_want;
    historia.so_that = so_that;
    historia.criteria = criteria;
    historia.since = since;
    historia.when = when;
    historia.so = so;
  doc.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'Habilidad no Guardada',
        objs: err
      });
    } else {
      response.json({
        error: false,
        message: 'Habilidad Guardada',
        objs: obj
      });
    }
  });;
});
}

function remove(req, res, next){
  const id = req.params.id;
  if(id){
    Proyecto.remove({_id:id}, function(err){
      if (err) {
        res.json({
          err: true,
          message: 'No se pudo eliminar historia',
          objs: {}
        });
      }else{
        res.json({
          err: false,
          message:'Historia eliminada',
          objs: {}
        });
      }
    });
  }else{
    res.json({
      err: true,
      message:'Historia no existe',
      objs:{}
    });
  }
}


module.exports = {
  create,
  index,
  show,
  update,
  remove
}
