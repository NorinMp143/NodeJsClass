const http = require('http');

const port = 1999;
const hostname = "localhost";

const app = http.createServer((request,response)=>{
  // response.writeHead(200,{'Content-Type':'text'})
  var a =5;
  if(a<6){
    response.writeHead(200,'Request HTML Ok',{'Content-Type':'text/html'})
  }
  response.write('<h1>Hello world</h1>');
  response.end('server is ending..');
});

app.listen(port,hostname,()=>{
  console.log(`Server is running on http://${hostname}:${port}`);
});