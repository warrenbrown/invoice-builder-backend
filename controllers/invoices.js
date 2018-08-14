const base = process.env.PWD;
const Invoice = require(base + '/models/invoice');

const getInvoices = function(req, res) {
  res.send('Invoices List');
}

createInvoice = function(req, res) {
  Invoice.create(req.body, function(err, invoice) {
    if (err) return next(err);
    res.json(200, invoice);
  });
}

module.exports = {
  getInvoices,
  createInvoice
}
