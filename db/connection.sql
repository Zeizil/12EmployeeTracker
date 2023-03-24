const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employees_db'
});

connection.connect(err=>console.log(err))
module.exports=connection