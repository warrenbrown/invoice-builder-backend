const express = require('express');
const router = express.Router();
const base = process.env.PWD;
const Invoices = require(base + '/controllers/invoices');

router.get('/', (req, res) => {
  res.send('Welcome to the Invoice Builder API');
});

//get all invoices
router.get('/invoices', Invoices.getInvoices);

//create an invoice
router.post('/invoice', Invoices.createInvoice);


module.exports = router;
