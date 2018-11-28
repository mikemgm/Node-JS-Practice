const express = require("express");  
const bodyParser = require("body-parser"); 
const exphbs = require("express-handlebars");
const app = express(); 
const port = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"})); 
app.set("view engine", "handlebars"); 


app.use(bodyParser.urlencoded({extended: false})); 

app.use(bodyParser.json());

const students = ["ivan", "santo", "ghalip", "hamish", "david"]; 


app.get("/", (req, res) => {  
        
     function randomStudent() {
        let ranstudents = {};
        for(i = 0; i<2; i++){    
            let index = Math.floor(Math.random() * students.length); 
            ranstudents[`student${i+1}`] = students[index];
        }
        
       return ranstudents;
    };
    res.render("home", randomStudent())
    // let index1 = Math.floor(Math.random() * students.length ); 
    // let index2 = Math.floor(Math.random() * students.length );

   
}); 

app.get("/", (req, res) => {
    res.send(students);
}); 

app.post("/students", (req, res) => { 
    students.push(req.body.name);    
    res.send("create a new magical student"); 
}); 

app.all('**', (req, res) => {
    res.send('CATCHALL!!!!')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// for (let i = 0; i < 3; i ++){
//     thestudents.push(students[Math.floor(Math.random() * students.length)]);
// }



// app.get("/", (req, res) => {
//     let thestudents = [];
//     for (let i = 0; i < 3; i ++){
//         thestudents.push(students[Math.floor(Math.random() * students.length)]);
//     }
//     res.render("home", {thestudents});
// });