const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'JfkQGJizXL',
    password : 'x3ZUbMuMre',
    database : 'JfkQGJizXL'
  });

connection.connect((err , connection)=>{
    // connection.release();
if (err) throw err 
console.log("Data connected:");
})



module.exports = connection;