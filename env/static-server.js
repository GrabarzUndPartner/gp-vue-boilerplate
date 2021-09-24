const express = require('express');
const compression = require('compression');
const app = express();

const dist = getDist();
const port = getPort();

app.use(compression());
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
