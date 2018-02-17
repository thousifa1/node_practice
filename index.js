const PORT=8888;
const http=require('http');
const requestHandler=function(request,response) 
{
	console.log(request.url);
	response.end('Hello from Node js Server!!');
}
const server=http.createServer(requestHandler);
server.listen(PORT);