const template = require('../views/Template')
const Model = require('../models')

//모든 게시물 반환
// url '/'
exports.main = (req, res) => {
  Model.board.findAll()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err)
  })
}

// '/create'
exports.create = (req, res) => {
  var board = req.body;
  var date = Date.now();

  Model.board.create({
    title: board.title,
    contents: board.contents,
    writer : 1,
    date : date
  }).then( result => {
    res.send({result: result})
  })
  .catch(err => {
    console.log(err)
  })
}

// '/delete:id'
exports.delete = (req, res) => {
  let postId = req.params.id

  Model.board.destroy({
    where: {id: postId}
  })
  .then(result => {
    res.send({result: result})
  })
  .then(err => {
    console.log(err)
  })
}


// '/read:id'
exports.read = (req, res) => {
  let postId = req.params.id

  Model.board.findOne({
    where:{id: postId}
  }).then( result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err)
  })

}

// '/update:id'
exports.update = (req, res) => {
  let postId = req.params.id
  var board = req.body;
  var date = Date.now();

  Model.board.update({
    title: board.title,
    contents: board.contents,
    writer : 1,
    date : date
  },{
    where: {id: postId}
  })
  .then( result => {
    res.send({result: result})
  })
  .catch(err => {
    console.log(err)
  })
}
