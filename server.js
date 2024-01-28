const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body
const Person = require('./models/person');
const menu  = require('./models/menu');



app.get('/',function (req,res){
  res.send('welcome to hotel');
})
  


    //import the router files

    const personRoutes = require('./router/personrouter');
    
    //use routes
    app.use('/person', personRoutes);
    

    //import the router files

    const menuRouter = require('./router/menusroutes');
    
    //use routes
    app.use('/menu',menuRouter );
 

  


    
  app.listen(3000)