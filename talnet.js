var express = require('express.io'),
    server  = express(),
    swig    = require('swig');

server.http().io();

require('express.io-middleware')(server);

// Configuracion para renderizar vistas
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/app/views');

// Agregamos post, cookies y sesiones
server.configure(function () {
    server.use(express.logger());
    server.use(express.cookieParser());
    server.use(express.bodyParser());
    server.use('/public', express.static(__dirname + '/public'));// Carga archivos estaticos
});

// Connections
var databaseConnection = require('./app/connections/database.js');

//Controllers
var userController     = require('./app/controllers/user');

userController(server, databaseConnection);

server.get('/', function (req, res) {
    res.redirect('/home');
});

server.listen(3000);