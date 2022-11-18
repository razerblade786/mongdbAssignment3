var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Suhaib Siddiqui' });
  res.send('HELLLLLLLLLLLLLLLo World!!!!!!!!!!!!!!!!');
});

router.get('partials/aboutme', function(req, res, next) {
  res.render('partials/aboutme.ejs', { title: 'Express Suhaib Siddiqui' });
});

router.get('partials/contact', function(req, res, next) {
  res.render('partials/contact.ejs', { title: 'Express Suhaib Siddiqui' });
});
router.get('partials/projects', function(req, res, next) {
  res.render('project', { title: 'Express Suhaib Siddiqui' });
});
module.exports = router;
