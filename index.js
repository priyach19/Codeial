const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

// accessing static directory

app.use(express.static('./assets'));

app.use(expressLayouts);


//Extract styles and scripts 
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);

//use routes
app.use('/',require('./routes'));


//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error: ${err}`);
    }
     console.log(`server is running on port:${port}`);
  });
