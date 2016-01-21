'use strict';

var PORT = 4000;

var http = require('http');
var math = require('./math');
var md5 = require('md5');

var server = http.createServer(function(req, res) {

  var urlParts = req.url.match(/[^/]+/g);
  var array = req.url.match(/\d+/g);

  switch(urlParts[0]) {
    case 'time':
      var timestamp = Date.now();
      res.end(timestamp + '\n');
      break;
    case 'math':
      if(urlParts[1] === 'add') {
        var sum = math.add(array);
        res.end(sum + '\n');
      } else if (urlParts[1] === 'square') {
          var x = urlParts[2];
          var square = math.square(x);
          res.end(square + '\n');
      }
      break;
    case 'sentence':
        console.log('here');
        var sentence = urlParts[1] || '';
        console.log("sentence:" + sentence);
        console.log("urlParts:" + urlParts);
        var string = decodeURI(sentence);
        console.log('string:' + string);
        var count = {};
        count.words = (string.match(/\S+/g) || []).length;
        count.spaces = (string.match(/\s/g) || []).length;
        count.letters = string.length - count.spaces;
        var sentCounter = JSON.stringify(count);
        res.end(sentCounter + '\n');
      break;
    case 'gravatar':
        var email = urlParts[2];
        var hash = md5(email);
        // var gravatar = 'http://www.gravatar.com/avatar/';
        res.end('http://www.gravatar.com/avatar/' + hash + '\n');
      break;
    default:
      res.end("nothing");
  }
});
server.listen(PORT, function() {
  console.log('Node server listening on port ' + PORT);
});;
