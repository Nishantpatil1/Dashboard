const fs = require("fs");
const http = require("http");

const myserver = http.createServer((req,res)=>{

  fs.readFile("Index.html",null, function(erre,data){

    if(erre){
      res.writeHead(404);
      res.write("file not found");
    }
    else{
      res.write(data);
    }

    res.end();

  });


  //   let log = `${Date.now()} , name , email , suggestion`;      
  // fs.appendFile("./test",log,(erre,data) => {});
  
});

myserver.listen(8000,()=> console.log("server started"));
