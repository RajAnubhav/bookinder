var express = require('express');
var router = express.Router();
// const app = express();

// app.use(express.static(__dirname + '/public'))



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
