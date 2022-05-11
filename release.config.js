
const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((args, [
    value, key
  ]) => {
    args[String(value).replace(/-/g, '')] = key;
    return args;
  }, {});

module.exports = {
  github: require('./.semantic-release/github.json')
}[String(args.provider || 'github')];
