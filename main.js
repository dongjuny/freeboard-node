const express = require('express');
const app = express();
const sequelize = require('./src/models').sequelize;
const path = require('path');
const methodOverride = require('method-override');

const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session) // 세션 store
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'juny!@#han!@#dong', // 암호 키
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: "mongodb://localhost/freeboard",
    collection: "sessions"
  })
}))

app.locals.moment = require('moment') //날짜 포맷 모듈
app.use(bodyParser.json()) // json 파싱
app.use(methodOverride('_method')) // PATCH, PUT 메소드요청
app.set('view engine', 'ejs'); // express의 view engine에 ejs 주입
app.set('views', path.join(__dirname, 'src/views'));
sequelize.sync(); //express 서버 실행시 스키마를 DB에 적용

app.use(require('./src/routes'))

app.use(function (req, res, next) {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('error')
});

app.listen(3000, function () {
  console.log('port 3000')
});

