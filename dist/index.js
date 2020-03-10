"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _orders = _interopRequireDefault(require("./src/routes/orders.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importacion librerias
//importacion rutas
var app = (0, _express["default"])();
var port = process.env.PORT || 3001; //REST log

app.use((0, _morgan["default"])('dev')); //entedimiento de JSON 

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); //Rutas

app.use(_orders["default"]);
app.listen(port, function () {
  console.log('API REST Run : ' + port);
});