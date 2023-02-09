var express = require('express');
var router = express.Router();
var fs = require('fs');
const DATABASE = require('../model/farm');
var jsondata = fs.readFileSync('./data.json', 'utf-8')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', async function (req, res, next) {
  try {
    let data = await DATABASE.create(JSON.parse(jsondata))

    res.status(201).json({
      status: 'success',
      message: 'success',
      data: data,

    })

  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message

    })
  }
});


module.exports = router;
