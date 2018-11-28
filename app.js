const http = require("http"); 

const hostname = "127.0.0.1"; 
const port = 3000;   

const students = ["ivan", "santo", "ghalip", "hamish", "david"];

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
      

    let url = req.url;
    let method = req.method;
    
    if (method === "GET" && url === "/") { 
        res.setHeader("Content-Type", "text/plain"); 
        console.log("match the students");

    } else if (method === "GET" && url === "/students"){
        res.setHeader("Content-Type", "application/json; charset=UTF-8"); 
        res.write(JSON.stringify(students));
        console.log("show list of students") 


    } else if(method === "POST" && url === "/students") { 
        console.log("create new students") 


    } else if (url === "/favicon.ico") {
        console.log("We don't have a favicon")
    
    }else {
        console.log("route not found"); 
        throw "Route Not FOUND";
    }
    
        res.end("Hello CHUM, where the magic?")
}); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});