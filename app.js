var express = require('express')
var app = express()

app.post('/pizza', function (req, res) {
  var msg = {}
  msg.message = "Here is some pizza"
  res.send(msg)
})
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
