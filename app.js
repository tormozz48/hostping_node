var fs = require('fs')
var request = require('request');
var libxmljs = require("libxmljs");

var ping = function(host){
    request(host, function (error, response, body, i) {
      console.log('host ' + host + ' return status ' + response.statusCode);
    });  
};

var execute = function(hosts){
  console.log('-- ping start --');
  for(var i = 0; i < hosts.length; i++){
    ping(hosts[i]);
  }
};

var parse_xml = function(file){
  console.log('-- start parsing configuration file --');
  var xmlDoc = libxmljs.parseXml(file);
  var elements = xmlDoc.root().childNodes();

  var hosts = [];
  var interval = null;

  var j = 0;
  for(var i = 0; i < elements.length; i++){
    if(elements[i].name() === 'repeat-interval'){      
      interval = elements[i].text();
      console.log('ping interval = ' + interval);
    }else if(elements[i].name() === 'host'){      
      hosts[j] = elements[i].text();
      console.log('host url' + j + ' = ' + hosts[j]);
      j++;    
    }
  }
  console.log('-- end parsing configuration file --');
  return {hosts: hosts, interval: interval};
};

fs.readFile('hosts.xml', function(err, data){
  if (err) throw err;
  var model = parse_xml(data);

  setInterval(function(){execute(model.hosts)}, model.interval*1000);
});