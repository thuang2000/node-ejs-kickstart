//include Express
const express = require('express');

// 💡 CRITICAL: Load our user data file from the data folder
const userData = require('./data/test.json');

// 🧪 TEMP SANITY CHECK: Dump the array to the terminal console
console.log("--- DATA LOAD TEST ---");
console.log(userData[0]); // Prints just the very first user object
console.log("----------------------");


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

// ==========================================
// 👥 NEW ROUTE: The User Directory (The List)
// ==========================================
app.get('/users', (req, res) => {
    res.render('users/index', {
        title: 'Users',
        users: userData // Passes the 100-user array to the template
    });
});

// ==========================================
// 🔍 NEW ROUTE: Individual Profile (The View)
// ==========================================
app.get('/users/view/:id', (req, res) => {
    let id = req.params.id;
    
    // We cheat elegantly by subtracting 1 to match array zero-indexing
    res.render('users/view', {
        title: 'User Profile',
        user: userData[--id] 
    });
});



//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

