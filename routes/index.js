var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:nickname', function(req, res, next) {
  var nickname = req.params['nickname'];
  res.render('index', { title: 'Express' ,nickname: nickname});
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',nickname: 'anonymous' });
});

module.exports = router;
