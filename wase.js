var http = require('http');

http.createServer(function(req,res){
  res.end('Hello my name is Waseem');
}).listen(8080,function(){
  console.log('Listening on 8080');
});
