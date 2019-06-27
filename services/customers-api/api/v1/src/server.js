const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

app.set('port', port);

const httpServer = http.createServer(app);

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = httpServer.address();
    const bind = typeof addr === 'string' ? `Pipe ${port}` : `Port ${port}`;
    console.log(`Listening on ${bind}`);
};

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);
