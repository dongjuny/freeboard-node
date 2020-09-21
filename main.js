const express = require('express');
const app = express();
const routes = require('./src/routes/index');
const sequelize = require('./models').sequelize;

app.use(routes);

app.listen(3000, function() {
  console.log('port 3000')
});


sequelize.sync(); //express 서버 실행시 스키마를 DB에 적용