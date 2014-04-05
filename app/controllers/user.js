var userController = function (server, db) {
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
		db.connect(function (err) {
			if (err){
				errorAbort(err);
		  		return;
		  	}
			var query = 'SELECT u.* ' +
						'FROM users u, talents t, user_talents ut ' +
						'WHERE ((u.) AND () AND ())' +
						'LIMIT 4';
			db.connection.query(query, function (err, users, fields) {
				debugger;
			  	if (err){
			  		errorAbort(err);
			  		return;
			  	}
			  	res.render('users', {
					users : users
				});
			});
		});
	});
	server.get('/home', function (req, res) {
		db.connect(function (err) {
			if (err){
				res.send(500, err);
		  		return;
		  	}
			var query = 'SELECT * ' +
						'FROM users ' +
						'LIMIT 4';
			db.connection.query(query, function (err, users, fields) {
				debugger;
			  	if (err){
			  		res.send(500, err);
			  		return;
			  	}
			  	res.render('home', {
					users : users
				});
			});
		});
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
		/*db.connect();
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
		db.end();*/
	});
	/*************************POST****************************/
	server.post('/getUsersByTalent', validParamsSendMessage, function (req, res) {
		res.send(200);
	});
};

module.exports = userController;
