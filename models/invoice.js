const mongoose = require('mongoose');
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  due: {
    type: Date,
  },
  rate: {
    type: Number,
  },
  tax: {
    type: Number,
  }

});

module.exports = mongoose.model('invoice', invoiceSchema);
