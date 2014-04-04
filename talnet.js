var express     = require('express.io'),
    server      = express();

server.http().io();

require('express.io-middleware')(server);

// Configuracion para renderizar vistas
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
//var middlewareHelper = require('./app/helpers/middleware');

// Connections
var databaseConnection = require('./app/connections/database.js');

//Controllers
var userController     = require('./app/controllers/user');

userController(server, databaseConnection);



server.get('/', function (req, res) {
    res.send('It works');
    //res.render('app/views/index.html');
});

server.listen(3000);