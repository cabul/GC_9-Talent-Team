var messageNotifierController = function (server, gcmHelper, middlewareHelper) {
	console.log('messageNotifierController loaded');
	/***********************Action Codes**********************/
	var SEND_MESSAGE_ACTION_CODE = 2000;
	/***********************MIDDLEWARES***********************/
	var validParamsSendMessage = function (req, res, next) {
		var data = req.body;
		switch(undefined){
			case data.title:
			case data.message:
				res.send(412, {
					customErrorCode  : 5010,
					messageError     : "Debe proporcionar todos los campos requeridos para éste método"
				});
				console.log("412 - 5010");
				break;
			default:
				if(data.message.length === 0){
					res.send(412, {
						customErrorCode  : 5004,
						messageError     : "Debe proporcionar un mensaje en sendMessage serivce"
					});
					console.log("412 - 5004");
				}else{
					next();
				}
				break;
		}
	};
	/*************************POST****************************/
	server.post('/sendMessage', middlewareHelper.validParamsToGcm , validParamsSendMessage, function (req, res) {
		console.log("sendMessage recibida");
		var data = {
			collapseKey     : req.body.collapseKey,
			registrationIds : req.body.registrationIds.split(";"),
			data            : {
				actionCode : SEND_MESSAGE_ACTION_CODE,
				title      : req.body.title,
				message    : req.body.message,
				content    : ""
			}
		};
		gcmHelper.sendMessage(data, function (err, result) {
			console.log("----> result: " + JSON.stringify(result));
		    console.log("----> err: " + err);
		    (err) ? res.send(err, result) : res.send(200);
		});
	});
};

module.exports = messageNotifierController;