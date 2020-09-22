const express = require('express');
const app = express();
const routes = require('./src/routes/index');
const sequelize = require('./src/models').sequelize;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));
app.use(routes)
app.locals.moment = require('moment');
app.set('view engine','ejs'); // express의 view engine에 ejs 주입



sequelize.sync(); //express 서버 실행시 스키마를 DB에 적용

app.listen(3000, function() {
  console.log('port 3000')
});
