module.exports = {
    HTML:function(body){
      return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
          <!-- Optional theme -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
      </head>
      <body>
      <div class="container">
          <h2>자유게시판</h2>
          <table class="table text-center">
              <thead>
              <form action="/create" method="post">
                <div class="form-group">
                    <label>제목</label>
                    <input type="text" class="form-control" name="title" placeholder="제목">
                </div>
                <div class="form-group">
                    <label>내용</label>
                    <textarea name="contents" class="form-control" placeholder="내용"></textarea>
                </div>
                <tr>
                    <th class="text-center">번호</th>
                    <th class="text-center">제목</th>
                    <input type="submit" class="btn btn-primary" value="등록"/>
                </tr>
              </form>
              </thead>
              <tbody>
                ${
                  body.forEach(element => {
                    element.dataValues.id
                  })
                }
              </tbody>
          </table>
      </div>
      </body>
      </html>
      `;
    }
  }
