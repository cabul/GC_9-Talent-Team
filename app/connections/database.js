var mysql        = require('mysql'),
	dbConnection = {
		connection : null,
		connect : function (callBack) {
			this.connection = mysql.createConnection({
			  host     : 'sql3.freemysqlhosting.net',
			  database : 'sql335596',
			  user     : 'sql335596',
			  password : 'yU7%hF5!',
			  port     : 3306
			});
			this.connection.connect(callBack);
		}
	};

module.exports = dbConnection;