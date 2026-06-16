//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

//index/home URL
app.get('/',(req,res)=>{
    let title = "World Cup Favorites Home Page";
    res.render('pages/index',{'title': title});
});

//about URL
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

//argentina URL
app.get('/argentina',(req,res)=>{
    let title = "About Argentina";
    res.render('pages/argentina',{'title': title});
});

//portugal URL
app.get('/portugal',(req,res)=>{
    let title = "About Portugal";
    res.render('pages/portugal',{'title': title});
});

//spain URL
app.get('/spain',(req,res)=>{
    let title = "About Spain";
    res.render('pages/spain',{'title': title});
});

//france URL
app.get('/france',(req,res)=>{
    let title = "About France";
    res.render('pages/france',{'title': title});
});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

