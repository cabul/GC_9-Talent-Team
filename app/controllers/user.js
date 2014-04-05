var userController = function (server, dbConnection) {
	console.log('userController loaded');
	/***********************Action Codes**********************/
	/***********************MIDDLEWARES***********************/
	var validParamsSendMessage = function (req, res, next) {
    	next();
	};
	/*************************GET****************************/
	server.get('/talent/:talentList/users', function (req, res) {
		var users = [
			{ id : 1, name : "Pepe",    email : 'a@pepe.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' },
			{ id : 2, name : "Juan",    email : 'a@Juan.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' },
			{ id : 3, name : "Pedro",   email : 'a@Pedro.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' },
			{ id : 4, name : "Alberto", email : 'a@Alberto.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' }
		];
		/*dbConnection.connect();
		var query = 'SELECT name ' +
					'FROM users';
		connection.query(query, function (err, rows, fields) {
		  	if (err){
		  		res.send(500, err);
		  		return;
		  	}
		  	debugger;*/
		  	res.render('users', {
				users : users
			});
		  	//console.log('The solution is: ', rows[0].solution);
		/*});
		dbConnection.end();*/
	});
	server.get('/home', function (req, res) {
		var users = [
			{ id : 1, name : "Pepe",    email : 'a@pepe.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' },
			{ id : 2, name : "Juan",    email : 'a@Juan.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' },
			{ id : 3, name : "Pedro",   email : 'a@Pedro.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' },
			{ id : 4, name : "Alberto", email : 'a@Alberto.com', tel : '999', image : 'http://public/images/photo.jpg', info : 'Lorem ipsum dolor sit amet', contact : 'cualquier cosa' }
		];
		/*dbConnection.connect();
		var query = 'SELECT name ' +
					'FROM users';
		connection.query(query, function (err, rows, fields) {
		  	if (err){
		  		res.send(500, err);
		  		return;
		  	}
		  	debugger;*/
		  	res.render('home', {
				users : users
			});
		  	//console.log('The solution is: ', rows[0].solution);
		/*});
		dbConnection.end();*/
	});
	server.get('/profile/:userId', function (req, res) {
		var user = { 
			id      : 1, 
			name    : "Pepe",    
			email   : 'a@pepe.com', 
			tel     : '999', 
			image   : 'http://public/images/photo.jpg', 
			info    : 'Lorem ipsum dolor sit amet', 
			contact : 'cualquier cosa' 
		};
		/*dbConnection.connect();
		var query = 'SELECT name ' +
					'FROM users';
		connection.query(query, function (err, rows, fields) {
		  	if (err){
		  		res.send(500, err);
		  		return;
		  	}
		  	debugger;*/
		  	res.render('profile', {
				user : user
			});
		  	//console.log('The solution is: ', rows[0].solution);
		/*});
		dbConnection.end();*/
	});
	/*************************POST****************************/
	server.post('/getUsersByTalent', validParamsSendMessage, function (req, res) {
		res.send(200);
	});
};

module.exports = userController;
