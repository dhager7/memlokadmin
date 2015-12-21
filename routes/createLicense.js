var express = require('express');
var router = express.Router();
var najax = require('najax');
var Client = require('node-rest-client').Client;
var prettyjson = require('prettyjson');

var client = new Client();

/* GET users listing. */
router.post('/:email/:sku/:name', function(req, res, next) {

  var email = req.params.email,
      sku = req.params.sku,
      name = req.params.name;

    var args = {
    };

    var myurl = 'http://memlokserver:8081/purchase/' + email + '/' + sku + '/' + name;

    client.post(myurl, args, function(data,response) {
        // parsed response body as js object
      var options = {
        noColor: false
      };
      var resource = '<p>' + JSON.stringify(JSON.parse(data), null, '  ') + '</p>';
      res.send(resource);
        // raw response
 //       console.log(response);
    });

});

module.exports = router;
