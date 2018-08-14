const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice')

router.get('/', (req, res) => {
  res.send('welcome to the invoice api');
});

router.get('/invoices', (req, res) =>{
  Invoice.find({}, function(err, invoices) {
    if(err) {
      console.log('Error retrieving invoices', err)
    } else {
      console.log('Retrieving invoices....');
      res.json(invoices);
    }
  });
});

router.post('/invoices/new', (req, res) => {
  Invoice.create(req.body, function(err, invoice) {
    if(err) {
      console.log(err)
    } else {
      res.json(invoice);
    }
  });
});

router.get('/invoices/:id', (req, res) => {
  Invoice.findById(req.params.id, function(err, invoice) {
    if(err) {
      console.log('There was an error retrieving your Inovice', err);
    } else {
      console.log('Retriving Invoice....');
      res.json(invoice);
    }
  });
});

router.put('/invoices/:id', (req, res) => {
  Invoice.findByIdAndUpdate(req.params.id, req.body, function(err, invoice) {
    if(err) {
      console.log(err);
    } else {
      res.json(invoice)
    }
  });
});

router.delete('/invoices/:id', (req,res) => {
  Invoice.findByIdAndRemove(req.params.id, function(err, invoice) {
    if(err) {
      console.log(err);
    } else {
      res.json('Invoice has been deleted');
    }
  });
});

module.exports = router;
