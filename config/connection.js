var mysql = require("mysql");


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

module.exports = connection ;
