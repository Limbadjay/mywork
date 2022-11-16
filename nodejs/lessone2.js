//create web server
var http = require('http');
var server = http.createServer(function(request,response)
{
    //all the code between braces pair will execute for each and every reqest
    console.log('Request received...');
});
server.listen(5000);
console.log("server is started....");