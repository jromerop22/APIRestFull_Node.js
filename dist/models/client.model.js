"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _conection = _interopRequireDefault(require("../database/conection.postgres"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//modelo cliente
var client = _conection["default"].define('Cliente', {
  client_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  lastname: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  phone: {
    type: _sequelize["default"].INTEGER
  }
});

var _default = client;
exports["default"] = _default;