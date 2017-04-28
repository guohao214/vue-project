/**
 * Created by GH30 on 2017/4/26.
 */
var express = require('express'),
  app = express(),
  opn = require('opn');

var params = process.argv.splice(2),
    webDir = params[0],
    port = params[1];

app.use(express.static(webDir));

app.listen(port, function () {
});

var uri = 'http://localhost:' + port;
opn(uri);
