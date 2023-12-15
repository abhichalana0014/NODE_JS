const express = require("express");
const app = express();

const reqFilter = (req, resp, next)=>{

    if(!req.query.age){
        console.log("Please Provide your Age: ")
    }
    else if (req.query.age <= 18){
        console.log("You are not eligible to access this page.")
    }
    else{
        next();
    }
}

app.get("/", (_,resp)=>{
    resp.send("Welcome to HomePage.")
})
app.get("/about", (_,resp)=>{
    resp.send("Welcome to AboutPage.")
})
app.get("/users", (_,resp)=>{
    resp.send("Welcome to usersPage.")
})
app.get("/contact", (_,resp)=>{
    resp.send("Welcome to contact Page.")
})


app.listen(4000);