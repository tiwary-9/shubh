const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
const url=req;
if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Ny App</title></head>');
    res.write('<body><form method="POST" action="/message">');
res.write('<input type="text"name="box">');
res.write('<button type="submit">Add Items</button>');
res.write('</html>');
//res.end();
return res.end();


}

if(url==='/message'&& req.method==='POST'){
    fs.writeFileSync('message.txt','hello Text');
    res.statusCode=302;
    res,setHeader('Content-Type','text/html');
    res.setHeader('Location','/');
    res.write('<h1>Message received</h1>');
    return res.end();

}
res.write('<html>');
res.write('<head><title>My App</title></head>');
res.write('<body><h1>Hello</h1></body>');
res.write('</html>');
return res.end();


});
server.listen(3000);

