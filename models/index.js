const mongoose = require('mongoose');
const env = process.env.NOVE_ENV ?? 'development';
const config = require('./../configs/mongoDB.json')[env];

const { host, port, dbName } = config;

mongoose
  .connect(`mongodb://${host}:${port}/${dbName}`)
  .then(() => console.log('Mondodb is ok'))
  .catch(err => console.log(err));

module.exports.User = require('./user');
