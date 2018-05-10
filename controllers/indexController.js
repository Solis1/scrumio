const express = require('express');
const Member = require('../models/member');
const User = require('../models/user');
const mongoose = require('mongoose');

function index(request, response, next) {
  response.render('index', {
    title: "Home",
    message: request.flash('signupMessage') + request.flash("loginMessage")
  });
}

function dashboard(request, response, next) {
    Member.find({"proyect_id": request.proyect_id})
    response.render('dashboard', {
      title: "Dashboard",
      userName: request.user.local.name,
      tabActive: request.params.tab == 'undefined' ? 'home' : request.params.tab
    });
}

function logout(request, response, next) {
  request.logout();
  response.redirect('/');
}

module.exports = {
  index,
  dashboard,
  logout
}
