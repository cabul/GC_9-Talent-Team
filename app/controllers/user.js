var userController = function (server, dbConnection) {
	console.log('userController loaded');
	/***********************Action Codes**********************/
	/***********************MIDDLEWARES***********************/
	var validParamsSendMessage = function (req, res, next) {
    	next();
	};
	/*************************GET****************************/
	server.get('/talent/:talentList/users', function (req, res) {
		//dbConnection.connect();
		
		//connection.end();
		var users = [
			{ name : "Pepe" },
			{ name : "Juan" },
			{ name : "Pedro" },
			{ name : "Alberto" },
			{ name : "Aday" },
			{ name : "Cristina" },
			{ name : "Calvin" },
			{ name : "Lewis" }
		];
		/*swig.renderFile('/app/views/users.html', {
			users : users
		});*/
		//res.send(200);
		res.render('users', {
			users : users
		});
	});
	/*************************POST****************************/
	server.post('/getUsersByTalent', validParamsSendMessage, function (req, res) {
		console.log("getUsersByTalent recibida");
		dbConnection.connect();
		debugger;
		connection.end();
		res.send(200);
	});
};

module.exports = userController;
