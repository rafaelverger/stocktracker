import express from 'express';

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

app.get('/', (_, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, host, () => console.log(`Listening on ${host}:${port}`));