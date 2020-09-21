const template = require('../views/Template')
const Board = require('../models/board')

exports.main = (req, res) => {

  const date = Date.now();

  var post = new Board(0,'title', 'contents', 'writer', date);
  console.log(post)

  var title = "자유게시판";
  var body = "자유게시판 입니다.";
  var html = template.HTML(title, body, post);

  res.send(html);
}

exports.create = (req, res) => {
  console.log("board create api");
}

exports.delete = (req, res) => {
  console.log("board delete api");
}

exports.read = (req, res) => {
  console.log("board read api");
}

exports.update = (req, res) => {
  console.log("board update api");
}

exports.getlist = (req, res) => {
  console.log("board getlist api");
}