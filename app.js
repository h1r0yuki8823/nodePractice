const http = require('http');
const fs = require('fs');

var server = http.createServer(getFromCliant);

server.listen(3000);
console.log('Server Start!');


function getFromCliant(req, res){
    request = req;
    response = res;
        fs.readFile('./index.html','UTF-8',writeToResponse);    
}

function writeToResponse(error, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
}