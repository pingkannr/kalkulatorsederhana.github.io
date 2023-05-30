const express = require('express');
const app = express();
const http = require('http');

app.use(express.static('public'));

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 + num2;
  res.send('Hasil: ' + result);
});

app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 - num2;
  res.send('Hasil: ' + result);
});

app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 * num2;
  res.send('Hasil: ' + result);
});

app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 / num2;
  res.send('Hasil: ' + result);
});
