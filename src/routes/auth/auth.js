const router = require('express').Router();
const user = require('../../models/user')

// sign_in
router.post('/auth', (req, res, next) => {
  var info = req.body;
  var id = info.id;
  var pw = info.pw;

  user.find({id: id, pw: pw}, (err, docs) => {
    if(Array.isArray(docs) && docs.length === 0){
      res.redirect('/post')
    }
    else{
      console.log(docs)
      req.session.user_id = id;
      req.session.is_logined = true;
      res.redirect('/post')
    }
  })
})

// sign_up
router.post('/sign_up', (req, res, next) => {
  var info = req.body;
  var id = info.id;
  var pw = info.pw;

  var User = new user({ id: id, pw: pw });
  User.save().then(function (result) {
    res.redirect('/post')
  }, function rejected(err) {
    console.log(err);
  });

})

// sign_up page
router.patch('/auth', (req, res, next) => {
  res.render('signup');
})

// logout
router.get('/logout', function (request, response) {
  request.session.destroy(function(err){
    response.redirect('/post');
  });
});


module.exports = router;