var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to React' });
});

router.get('/counter', function(req, res, next) {
  res.render('counter', { title: 'Click and see the number of clicks' });
});

router.get('/todo', function(req, res, next) {
  res.render('todo', { title: 'TODO' });
});

router.get('/realtime', function(req, res, next) {
  res.render('realtime', { title: '' });
});

module.exports = router;
