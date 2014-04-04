var express     = require('express.io'),
    server      = express(),
    gcm         = require('node-gcm');

server.http().io();

require('express.io-middleware')(server);

// Configuracion para renderizar vistas
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', './');

// Agregamos post, cookies y sesiones
server.configure(function () {
    server.use(express.logger());
    server.use(express.cookieParser());
    server.use(express.bodyParser());
    server.use('/', express.static(__dirname + '/app'));
});

//helpers
var middlewareHelper = require('./app/helpers/middleware');

//Controllers
var messageNotifierController     = require('./app/controllers/messageNotifier');

server.get('/', function (req, res) {
    res.send('Hookapp');
    //res.render('app/views/index.html');
});


gcmHelper.init(server, gcm);
gpsController(server, gcmHelper, middlewareHelper);
messageNotifierController(server, gcmHelper, middlewareHelper);
updatesNotifierController(server, gcmHelper, middlewareHelper);
adminActionNotifierController(server, gcmHelper, middlewareHelper);

server.listen(3000);