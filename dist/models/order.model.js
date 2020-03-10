"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _conection = _interopRequireDefault(require("../database/conection.postgres"));

var _client = _interopRequireDefault(require("./client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//modelo Pedido
var order = _conection["default"].define('Pedido', {
  client_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  pedido_id: {
    type: _sequelize["default"].INTEGER
  },
  address: {
    type: _sequelize["default"].TEXT
  },
  deliverdate: {
    type: _sequelize["default"].DATE
  },
  delivertime: {
    type: _sequelize["default"].TIME
  }
}, {
  timestamps: false
}); //uno a muchos


_client["default"].hasMany(order, {
  foreingKey: 'pedido_id',
  sourceKey: 'client_id'
});

order.belongsTo(_client["default"], {
  foreingKey: 'pedido_id',
  sourceKey: 'client_id'
});
var _default = _client["default"];
exports["default"] = _default;