"use strict";

var controller = {
  createOrder: function createOrder(req, res) {
    console.log(req.body);
    res.send('received');
  },
  listOrder: function listOrder(req, res) {}
};
module.exports = controller;