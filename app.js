const express= require('express');
const app  = express();

app.get('/',function(req,res,next){
  res.send('Hello world');
})

app.listen(1999,()=>{console.log('running')});