const express = require('express');
const mongoose = require('mongoose');
const Historia = require('../models/historia');

function create(req, res, next){
  const narrativa = req.body.narrativa;
  // Aquí va el Product Owner
  const state = req.body.state;
  const prioridad = req.body.prioridad;
  const size = req.body.size;
  const como_realizar = req.body.como_realizar;
  const quiero_tener = req.body.quiero_tener;
  const de_manera = req.body.de_manera;
  const criterios_aceptacion = req.body.criterios_aceptacion;
  const dado_que = req.body.dado_que;
  const cuando = req.body.cuando;
  const entnces = req.body.entonces;

  let historia = new Historia();

  historia.narrativa = narrativa;
  // Aquí va el Product Owner
  historia.state = state;
  historia.prioridad = prioridad;
  historia.size = size;
  historia.como_realizar = como_realizar;
  historia.quiero_tener = quiero_tener;
  historia.de_manera = de_manera;
  historia.criterios_aceptacion = criterios_aceptacion;
  historia.dado_que = dado_que;
  historia.cuando = cuando;
  historia.entnces = entonces;

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
  Proyecto.paginate({}, {
    page: page,
    limit:3
  }, (err, proyectos)=>{
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
        objs:proyectos
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
      message : 'Proyecto',
      obj: obj
    });
  });
}

function body(req, res, next){

}

function remove(req, res, next){
  const id = req.params.id;
  if(id){
    Proyecto.remove({_id:id}, function(err){
      if (err) {
        res.json({
          err: true,
          message: 'No se pudo eliminar proyecto',
          objs: {}
        });
      }else{
        res.json({
          err: false,
          message:'Proyecto eliminado',
          objs: {}
        });
      }
    });
  }else{
    res.json({
      err: true,
      message:'Proyecto no existe',
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
