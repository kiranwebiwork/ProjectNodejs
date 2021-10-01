const express = require("express");
const mysql =  require("mysql");

const Route =  express.Router();
const IndexContoller = require("../controler/control");
// const logger = require("../middlerware/logger");



Route.get('/blog' , IndexContoller.getblog);
Route.get('/blog/:id' , IndexContoller.getblogbyid);
Route.post('/blog', IndexContoller.postblog);
Route.put('/blog/:id' , IndexContoller.updateblogbyid);
Route.delete('/blog/:id' , IndexContoller.deleteblogbyid);
//Route.delete('/blog' , IndexContoller.deleteallblog);
Route.post('/user/register' , IndexContoller.userRegistration);
Route.post('/user/login' , IndexContoller.userLogin);


module.exports = Route;
