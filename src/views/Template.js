module.exports = {
    HTML:function(title, body, board){
      return `
      <!doctype html>
      <html>
      <head>
        <title>${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        ${body}
        ${board.title}
        ${board.id}
        ${board.contents}
        ${board.writer}
      </body>
      </html>
      `;
    }
  }