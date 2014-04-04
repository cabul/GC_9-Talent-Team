var userController = function (server) {
	console.log('userController loaded');
	/***********************Action Codes**********************/
	/***********************MIDDLEWARES***********************/
	var validParamsSendMessage = function (req, res, next) {
    next();
	};
	/*************************POST****************************/
	server.post('/sendMessage', validParamsSendMessage, function (req, res) {
		console.log("sendMessage recibida");
    res.send(200);
	});
};

module.exports = userController;
