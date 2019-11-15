const github = require('./.semantic-release/github.json');
const gitlab = require('./.semantic-release/gitlab.json');

const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((args, [
    value, key
  ]) => {
    args[String(value).replace(/-/g, '')] = key;
    return args;
  }, {});

module.exports = (args.provider === 'gitlab') ? gitlab : github;
