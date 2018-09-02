/**
 * Created by wangpeng on 2018/9/2.
 */

const mysql = require('mysql');
const config = require('./config');

//创建连接
const conn = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE
});

conn.connect();

conn.query('select * from wwwsqldesigner', (error, results, fields) => {
  "use strict";
  if (error) {
    throw error;
  }
  console.log(results);
});


