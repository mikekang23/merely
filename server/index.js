const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(router);

server.listen(process.env.PORT || 5000, () => console.log('Server started.'));
