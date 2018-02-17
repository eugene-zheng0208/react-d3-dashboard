var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.dev.conf');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});

function sentPosition(socket){
    socket.emit('update', {

        'company_id':123,
        'driver_id':456,
        'timestamp':'yyyy-MM-ddHH:mm:ss',
        'latitude':52.234234,
        'longitude':13.23324,
        'accuracy':12.0,
        'speed':123.45


    });
}

io.on('connection', function(client) {
    setInterval(function(){
        sentPosition(client);
    }, 10000);
});

server.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info('Listening on port %s', PORT);
    }
});
