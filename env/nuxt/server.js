const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const fs = require('fs');
const path = require('path');
const httpolyglot = require('httpolyglot');
const port = process.env.PORT || 8050;
const opn = require('opn');

// We instantiate Nuxt.js with the options
let config = require('./config.js');
const nuxt = new Nuxt(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

let options = getOptions('./env/nuxt/cert');

httpolyglot.createServer(options, app).listen(port, '0.0.0.0', function () {
  if (!process.env.TRAVIS) {
    opn('http://localhost:8050', {app: ['google chrome', '--incognito']});
  }
});

function getOptions (dir) {
  if (fs.existsSync(dir)) {
    return {
      key: fs.readFileSync(path.join(dir, 'myserver.key')),
      cert: fs.readFileSync(path.join(dir, 'STAR_gp-home_net.crt')),
      ca: [
        fs.readFileSync(path.join(dir, 'AddTrustExternalCARoot.crt')),
        fs.readFileSync(path.join(dir, 'COMODORSAAddTrustCA.crt')),
        fs.readFileSync(path.join(dir, 'COMODORSADomainValidationSecureServerCA.crt'))
      ],
      requestCert: false,
      rejectUnauthorized: false
    };
  } else {
    return {};
  }
}
