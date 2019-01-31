var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');

var app = express();
app.use(cookieParser());

var whitelist = ['http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, credentials: true
}

app.options('/', cors(corsOptions))
app.post('/', cors(corsOptions), function (req, res) {
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    res.cookie('cookieName', 'someValue', { maxAge: 360000 });
    res.end(JSON.stringify({ cookieSet: "1" }));
  }
  else {
    res.end(JSON.stringify({ cookieSet: "0" }));
  }

});

var server = app.listen(3000, function () {
  console.log("listening..");
})
