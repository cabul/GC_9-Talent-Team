var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db522671399.db.1and1.com',
  user     : 'dbo522671399',
  password : 'Hack4Good'
});

module.exports = connection;