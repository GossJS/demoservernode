import portfinder from 'portfinder';
import http from 'http';

const server = http.Server((req, res) => res.end('Hello world!'));
portfinder.getPortPromise()
.then(PORT => (console.log(PORT), server.listen(PORT)));
