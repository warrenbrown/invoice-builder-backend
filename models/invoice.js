const mongoose = require('mongoose');
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  title: String,
  body: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
