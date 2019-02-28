const certInfo = {
  key: 'myserver.key',
  cert: 'STAR_gp-home_net.crt',
  ca: [
    'AddTrustExternalCARoot.crt',
    'COMODORSAAddTrustCA.crt',
    'COMODORSADomainValidationSecureServerCA.crt'
  ]
};

const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const fs = require('fs');
const path = require('path');
const httpolyglot = require('httpolyglot');
const port = process.env.PORT || 8050;

// We instantiate Nuxt.js with the options
let config = require('./nuxt.config.js');
const nuxt = new Nuxt(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

let options = getOptions('./env/cert');

httpolyglot.createServer(options, app).listen(port, '0.0.0.0', function () { });

function getOptions (dir) {
  if (
    fs.existsSync(path.join(dir, certInfo.key)) &&
    fs.existsSync(path.join(dir, certInfo.cert))
  ) {
    return {
      key: fs.readFileSync(path.join(dir, certInfo.key)),
      cert: fs.readFileSync(path.join(dir, certInfo.cert)),
      ca: certInfo.ca.map(ca => {
        return fs.readFileSync(path.join(dir, ca));
      }),
      requestCert: false,
      rejectUnauthorized: false
    };
  } else {
    return {};
  }
}
