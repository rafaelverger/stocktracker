import startServer from './server';

const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

startServer(port, host);