var express = require('express');
var app = express();
var sequelize = require('./src/models').sequelize;
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

app.locals.moment = require('moment') //날짜 포맷 모듈

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) // json 파싱
app.use(methodOverride('_method'))
app.set('view engine','ejs'); // express의 view engine에 ejs 주입
app.set('views', path.join(__dirname, 'src/views'));
app.use(require('./src/routes'))
sequelize.sync(); //express 서버 실행시 스키마를 DB에 적용

app.use(function(req, res, next) {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('error')
});

app.listen(3000, function() {
  console.log('port 3000')
});

