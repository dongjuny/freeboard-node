var mongoose = require('mongoose');
var url = 'mongodb://localhost/users';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Error : ', err);
});
db.on('open', function () {
  console.log('db open');
});

var UserScheme = mongoose.Schema({
    id: String,
    pw: String
}, {
    versionKey: false
});

module.exports = mongoose.model('User', UserScheme);