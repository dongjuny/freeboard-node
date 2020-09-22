const Model = require('../models')

const path = '/Users/handongjun/Desktop/freeboard-node/src/views/main'
// url = '/getlist'
exports.getlist = (req, res) => {
  Model.board.findAll( {
    raw: true
  })
  .then(result => {
    res.render(path, {result: result})
  })
  .catch(err => {
    console.log(err)
  })
}

// '/create'
exports.create = (req, res) => {
  let board = req.body;
  let date = Date.now();

  console.log(board)
  Model.board.create({
    title: board.title,
    contents: board.contents,
    writer : 1,
    date : date
  }).then( result => {
    res.redirect('/getlist')
  })
  .catch(err => {
    console.log("@@@@@에러다@@@@@")
    console.log(req.board)
    console.log(board.title)
    console.log(board.contents)
    res.redirect('/getlist')
    console.log("@@@@@에러다@@@@@")
  })
}

// '/delete:id'
exports.delete = (req, res) => {
  let postId = req.params.id

  Model.board.destroy({
    where: {id: postId}
  })
  .then(result => {
    res.redirect('/getlist')
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
    res.render('/Users/handongjun/Desktop/freeboard-node/src/views/board',{result: result});
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
    res.send({result: (result == 1) ? true : false})
  })
  .catch(err => {
    console.log(err)
  })
}
