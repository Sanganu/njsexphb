/* This Code written by Sangeetha
This server.js is initially server.js where ORM is not used.
Uses Mysql, express handlebars, mysql */
/* works with index.handlebars , main.handlebars */

var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
     extended:false
}))
app.use(methodOverride('_method'));

app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");


app.listen(PORT,function()
{
  console.log('The Restaurant application is running on : '+PORT);
});


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user:'root',
  password:'Mykutties2',
  database:'restaurant'
});

connection.connect(function(err){
   if (err) throw err;
   console.log('Connected as id: '+ connection.threadId);
});

app.get('/',function(req,res){
  connection.query('Select * from menu;',function(err,qresults){
       if (err) console.log('Error in Connecting to database:',err);
       res.render('index',{vitems:qresults});
  });

});

app.post('/create',function(req,res)
{
    connection.query('INSERT INTO MENU (item_name) VALUES(?)',
         [req.body.inmenuitem],function(err,qresults)
         {
           if (err) console.log("Unable to insert record in the table",err);
           res.redirect('/');
         });
});

app.put('/update',function(req,res)
{
  connection.query('UPDATE menu SET item_name = ? where id = ?',
  [req.body.inmenuitem,req.body.inmenuid],function(err,qresults)
  {
    if (err) console.log('Unable to update item :',err);
    console.log('Update succeeded!!!');
    res.redirect('/');
  });
});

app.delete('/delete',function(req,res)
{
  connection.query('DELETE FROM MENU where id = ?',
  [req.body.inmenuid],function(err,qresults)
  {
    if (err) console.log('Unable to update item :',err);
    console.log('Delted Menu item!!!');
    res.redirect('/');
  });
});
