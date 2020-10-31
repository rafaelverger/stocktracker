import express from 'express';
import nunjucks from 'nunjucks';

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

nunjucks.configure('server/templates/', {
  express: app,
  autoescape: true,
  watch: true,
});

app.get('/', (_, res) => {
  res.render('index.njk');
});

app.listen(port, host, () => console.log(`Listening on ${host}:${port}`));