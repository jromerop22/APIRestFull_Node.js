"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var controller = require('../controllers/orders.controller');

var routerOrders = (0, _express.Router)(); //enrutamiento para Pedidos

routerOrders.post('/', controller.createOrder);
routerOrders.post('/n', controller.listOrder);
var _default = routerOrders;
exports["default"] = _default;