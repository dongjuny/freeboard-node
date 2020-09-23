var router = require('express').Router();
var Model = require('../../models')

// main
router.get('/post', (req, res, next) => {
  Model.board.findAll({
    raw: true
  })
    .then(result => {
      res.render('main', { result: result })
    })
    .catch(err => {
      next(err)
    })
})

// create
router.post('/post', (req, res, next) => {
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
      next(err)
    })
})

// read
router.get('/post/:id', (req, res, next) => {
  let postId = req.params.id

  console.log(postId)

  Model.board.findOne({
    where: { id: postId }
  }).then(result => {
    res.render('post', { result: result });
  })
    .catch(err => {
      next(err)
    })
})

// update
router.patch('/post/:id', (req, res, next) => {
  let postId = req.params.id

  Model.board.findOne({
    where: { id: postId }
  }).then(result => {
    res.render('update', { result: result });
  })
    .catch(err => {
      next(err)
    })
})

router.put('/post/:id', (req, res, next) => {
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
      next(err)
    })
})

// delete
router.delete('/post/:id', (req, res, next) => {
  let postId = req.params.id

  Model.board.destroy({
    where: { id: postId }
  })
    .then(result => {
      res.redirect('/post')
    })
    .then(err => {
      next(err)
    })
})

module.exports = router