const http = require('http');

const server = http.createServer((req,res)=>{
  
  const routes = {
    '/': function(req,res){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.write(req.url +' url getting');
      res.end();
    },
    '/home': function(req,res){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.write(req.url +' url getting');
      res.end();
    },
    '/err': function(req,res){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.write('err url getting');
      res.end();
    },
  }

  if(req.url in routes){
    return routes[req.url](req,res);
  }else{
    return routes["/err"](req,res);
  }
});

server.listen(1999,()=>console.log("runnning..."))