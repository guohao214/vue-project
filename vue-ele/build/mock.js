/**
 * Created by GuoHao on 2017/4/8.
 */
var express = require('express')

var router = express.Router();
router.get('/seller', function (req, res) {
  res.json({
    status: 0
  })
})

exports.router = router
