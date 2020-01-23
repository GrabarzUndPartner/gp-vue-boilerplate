const express = require('express');
const app = express();

const dist = getDist();
const port = getPort();

app.use(express.static(dist));
app.listen(port, function () {
  console.log(`server listening on port ${port}, dist: ${dist}`);
});

function getDist () {
  return process.env.npm_config_dist || 'dist';
}

function getPort () {
  return process.env.PORT || process.env.npm_config_port || 8050;
}
