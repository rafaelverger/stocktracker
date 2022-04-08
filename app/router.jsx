import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import AppRoot from './index.jsx';

const router = express.Router()
router.get('/', (_, res) => {
  const appHtml = ReactDOMServer.renderToString(<AppRoot />);
  res.render('index.njk', { appHtml });
});

export default router;
