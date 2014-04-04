var middlewareHelper = {
	validParamsToGcm : function (req, res, next) {
		var data = req.body;
		switch(undefined){
			case data.registrationIds:
			case data.notificationCode:
			case data.colapseKey:
				res.send(412, {
					customErrorCode  : 5010,
					messageError     : "Debe proporcionar todos los campos requeridos para éste método"
				});
				console.log("412 - 5010");
				break;
			default:
				if(data.registrationIds.length === 0){
					res.send(500, {
						customErrorCode  : 5001,
						messageError     : "Debe proporcionar ids de registro para transmitir el mensaje"
					});
					console.log("500 - 5001");
				}else{ 
					var registrationIds = data.registrationIds.split(";");
					if(registrationIds.length === 0){
						res.send(500, {
							customErrorCode  : 5002,
							messageError     : "El array de ids de registro proporcionado esta vacío"
						});
						console.log("500 - 5002");
					}else if(data.notificationCode.length === 0){
						res.send(500, {
							customErrorCode  : 5003,
							messageError     : "Debe proporcionar un código de notificación para transmitir el mensaje"
						});
						console.log("500 - 5003");
					}else{
						next();
					}
				}
				break;
		}
	}
};

module.exports = middlewareHelper;