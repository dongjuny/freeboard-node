const express = require('express');
const app = express();
const routes = require('./src/routes/index');
const sequelize = require('./src/models').sequelize;

app.use(express.json())
app.use(routes);

sequelize.sync(); //express 서버 실행시 스키마를 DB에 적용

app.listen(3000, function() {
  console.log('port 3000')
});
