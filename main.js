const express = require('express');
const app = express();

const routes = require('./src/routes/index');

app.use(routes);

app.listen(3000, function() {
  console.log('port 3000')
});
