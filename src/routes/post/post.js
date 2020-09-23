var router = require('express').Router();
var Model = require('../../models')

// main
router.get('/post', (req, res) => {
  Model.board.findAll({
    raw: true
  })
    .then(result => {
      res.render('main', { result: result })
    })
    .catch(err => {
      res.sendStatus(404);
    })
})

// create
router.post('/post', (req, res) => {
  let board = req.body;
  let date = Date.now();

  console.log(board)
  Model.board.create({
    title: board.title,
    contents: board.contents,
    writer: 1,
    date: date
  }).then(result => {
    res.redirect('/post')
  })
    .catch(err => {
      res.sendStatus(404);
    })
})

// read
router.get('/post/:id', (req, res) => {
  let postId = req.params.id

  console.log(postId)

  Model.board.findOne({
    where: { id: postId }
  }).then(result => {
    res.render('post', { result: result });
  })
    .catch(err => {
      res.sendStatus(404);
    })
})

// update
router.get('/post/update/:id', (req, res) => {
  let postId = req.params.id

  Model.board.findOne({
    where: { id: postId }
  }).then(result => {
    res.render('update', { result: result });
  })
    .catch(err => {
      res.sendStatus(404);
    })
})

router.put('/post/:id', (req, res) => {
  let postId = req.params.id
  var board = req.body;
  var date = Date.now();

  Model.board.update({
    title: board.title,
    contents: board.contents,
    writer: 1,
    date: date
  }, {
    where: { id: postId }
  })
    .then(result => {
      res.redirect('/post')
    })
    .catch(err => {
      res.sendStatus(404);
    })
})

// delete
router.delete('/post/:id', (req, res) => {
  let postId = req.params.id

  Model.board.destroy({
    where: { id: postId }
  })
    .then(result => {
      res.redirect('/post')
    })
    .then(err => {
      res.sendStatus(404);
    })
})

module.exports = router