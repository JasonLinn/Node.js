var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zxc123',
  database:'helloworld'
});

connection.connect();

connection.query('SELECT * FROM first', function(err, rows, fields) {
  if (err) throw err;
  console.log('The data is: ', rows[0]);
});

connection.end();