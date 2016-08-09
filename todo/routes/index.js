var express = require('express');
var router = express.Router();
var readTasks = require('../modules/taskLoader');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to React' });
});

router.get('/counter', function(req, res, next) {
  res.render('counter', { title: 'Click and see the number of clicks' });
});

router.get('/todo', readTasks);

router.get('/realtime', function(req, res, next) {
  res.render('realtime', { title: '' });
});

module.exports = router;
