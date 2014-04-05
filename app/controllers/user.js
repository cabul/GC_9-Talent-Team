var userController = function (server, db) {
	console.log('userController loaded');
	/***********************Action Codes**********************/
	/***********************MIDDLEWARES***********************/
	var validParamsSendMessage = function (req, res, next) {
    	next();
	};
	/*************************GET****************************/
	server.get('/talent/:talentList/users', function (req, res) {
		db.connect(function (err) {
			if (err){
				res.send(500, err);
		  		return;
		  	}
		  	var talentNames = (typeof(req.params.talentList) === 'string' && req.params.talentList !== '%20') ? req.params.talentList.split(" ") : [] ;
			var queryString = 'SELECT DISTINCT u.* ' +
						'FROM users u, talents t, user_talents ut ' +
						'WHERE (u.id = ut.user_id) AND (t.id = ut.talent_id)';
			if(talentNames.length > 0) queryString += ' AND (';
			talentNames.forEach(function (talent, index) {
				if(index > 0) queryString += ' OR ';
				queryString += '(LCASE(t.name) LIKE "%' + talent.toLowerCase() + '%")';
			});
			if(talentNames.length > 0) queryString += ')';
			db.connection.query(queryString, function (err, users, fields) {
			  	if (err){
			  		res.send(500, err);
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
			var query = 'SELECT id, name, image ' +
						'FROM users ' +
						'LIMIT 4';
			db.connection.query(query, function (err, users, fields) {
			  	if (err){
			  		res.send(500, err);
			  		return;
			  	}
			  	var addTalentsToUser = function (userIndex, callBack) {
			  		if(userIndex >= users.length){
			  			callBack();
			  		}else{
			  			var talentQuery = 'SELECT t.name ' +
										  'FROM users u, talents t, user_talents ut ' +
										  'WHERE (u.id = ut.user_id) AND (t.id = ut.talent_id) AND (u.id = ' + users[userIndex].id + ') ' +
										  'LIMIT 3';
			  			db.connection.query(talentQuery, function (err, talents, fields) {
			  				if (err){
						  		res.send(500, err);
						  		return;
						  	}
						  	users[userIndex].talents = talents;
						  	addTalentsToUser((userIndex + 1), callBack);
			  			});
			  		}
			  	};
			  	addTalentsToUser(0, function () {
			  		res.render('home', {
						users : users
					});
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
		db.connect(function (err) {
			if (err){
				res.send(500, err);
		  		return;
		  	}
		  	var talentNames = (typeof(req.params.talentList) === 'string' && req.params.talentList !== '%20') ? req.params.talentList.split(" ") : [] ;
			var queryString = 'SELECT DISTINCT u.* ' +
						'FROM users u, talents t, user_talents ut ' +
						'WHERE (u.id = ut.user_id) AND (t.id = ut.talent_id)';
			if(talentNames.length > 0) queryString += ' AND (';
			talentNames.forEach(function (talent, index) {
				if(index > 0) queryString += ' OR ';
				queryString += '(LCASE(t.name) LIKE "%' + talent.toLowerCase() + '%")';
			});
			if(talentNames.length > 0) queryString += ')';
			db.connection.query(queryString, function (err, users, fields) {
			  	if (err){
			  		res.send(500, err);
			  		return;
			  	}
			  	res.render('profile', {
					user : user
				});
			});
		});
	});
	/*************************POST****************************/
	server.post('/getUsersByTalent', validParamsSendMessage, function (req, res) {
		res.send(200);
	});
};

module.exports = userController;
