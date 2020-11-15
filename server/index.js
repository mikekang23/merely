const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const mysql = require('mysql2');
const connection = require('./connection');
const user = require('./models/User');
const bcrypt = require('bcrypt');
const {User} = sequelize.models;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(router);

User.findOne({ where: { id: 1} })
  .then((value) => { console.log(value.get().name); })

server.listen(process.env.PORT || 5000, () => {console.log('Server has started.')});
