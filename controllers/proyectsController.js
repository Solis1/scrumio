const express = require('express');
const Proyecto = require('../models/proyecto');
const mongoose = require('mongoose');

function create(req, res, next){
  const nombre = req.body.nombre;

  let proyecto = new Proyecto();

  proyecto.nombre = nombre;

  proyecto.save((err, proyecto)=>{
    if (err) {
      res.json({
        err: true,
        message: 'No se pudo guardar el proyecto',
        objs: {}
      });
    }else{
      res.json({
        err: false,
        message:'Poryecto Guardado',
        objs:proyecto
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
  remove
}
