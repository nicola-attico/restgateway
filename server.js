#!/usr/bin/env node

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// /api/snc/aries/topic/connections/

app.use('*',
        createProxyMiddleware({ target: 'https://aries1demo.service-now.com',
                                changeOrigin: true,
                                pathRewrite: { "\/$": ""  }
                              }));
app.listen(3000);

