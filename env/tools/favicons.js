const favicons = require('favicons');
const source = './src/static/favicon/favicon.png'; // Source image(s). `string`, `buffer` or array of `string`
const configuration = require('./favicons/config');
const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

new Promise((resolve, reject) => {
  favicons(source, configuration, (error, response) => {
    if (error) {
      reject(error);
    } else {
      resolve(response);
    }
  });
}).catch(function (error) {
  console.log(error.status); // HTTP error code (e.g. `200`) or `null`
  console.log(error.name); // Error name e.g. "API Error"
  console.log(error.message); // Error description e.g. "An unknown error has occurred"
}).then(function (response) {
  return Promise.all([
    writeImages(response.images),
    writeConfigs(response.files),
    writeHTMLHeadConfig(response.html)
  ]);
}).then(function () {
  console.log('READY');
});

function writeImages (images) {
  return writeFiles('../../src/static/favicon', images);
}

function writeConfigs (files) {
  return writeFiles('../../src/static/favicon', files);
}

function writeFiles (path, files) {
  return Promise.all(files.map(function (file) {
    return writeFile(path, file);
  }));
}

function writeFile (p, file) {
  return new Promise(function (resolve, reject) {
    fs.outputFile(path.resolve(__dirname, p, file.name), file.contents, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function writeHTMLHeadConfig (html) {
  return writeFile('../nuxt/config/global', {name: 'favicon.json', contents: JSON.stringify(convertHTML2JSON(html))});
}

function convertHTML2JSON (html) {
  return html.reduce(function (result, line) {
    Array.prototype.slice.call(cheerio.load(line)('link, meta')).map(function (item) {
      if (!result[item.name]) {
        result[item.name] = [];
      }
      result[item.name].push(item.attribs);
    });
    return result;
  }, {});
}
