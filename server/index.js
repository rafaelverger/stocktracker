import express from 'express';
import nunjucks from 'nunjucks';

import AppRouter from './app/router.jsx';

const startServer = (port, host) => {
  const app = express();
  
  nunjucks.configure('server/templates/', {
    express: app,
    autoescape: true,
    watch: true,
  });
  
  app.use('/', AppRouter);
  
  return new Promise(res => app.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}`)
    res();
  }));
}

export default startServer;
