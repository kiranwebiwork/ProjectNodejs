const express = require("express");
const Route =  express.Router();
const IndexContoller = require("../controler/control");


Route.get('/' , IndexContoller.initial);
Route.get("/home" , IndexContoller.home);
Route.get("/contact" , IndexContoller.contact);

module.exports = Route;
