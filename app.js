var express = require('express')
var app = express()

app.post('/pizza', function (req, res) {
  var msg = {}
  msg.message = "Here is some pizza"
  res.send(msg)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
