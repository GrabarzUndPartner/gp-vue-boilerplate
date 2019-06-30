const express = require('express');
const app = express();

app.use(express.static('dist'));
app.listen(8050, function () {
  console.log('server listening on port 8050!');
});
