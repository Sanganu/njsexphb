var mysql = require("mysql");
var connection;

if(process.end.JAWSDB_URL)
{
  connection = mysql.createConnection(process.end.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'hacktheplanet',
      database: 'todoagain_db'
  });
};

connection.connect();
module.exports = connection;

/*
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
*/
