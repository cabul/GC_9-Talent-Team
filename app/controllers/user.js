var userController = function (server, dbConnection) {
	console.log('userController loaded');
	/***********************Action Codes**********************/
	/***********************MIDDLEWARES***********************/
	var validParamsSendMessage = function (req, res, next) {
    	next();
	};
	/*************************GET****************************/
	server.get('/talent/:talentWord/users', function (req, res) {
		res.send(200);
		/*Supervisor.find({ 'schools._id' : req.params.schoolId }, function (err, supervisors) {
			if(err){
				res.send(500, err);
			}else{
				res.send(200, supervisors);
			}
		});*/
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
