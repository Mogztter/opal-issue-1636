var OpalCompiler = require('bestikk-opal-compiler');
var opalCompiler = new OpalCompiler({dynamicRequireLevel: 'ignore', defaultPaths: ['.']});
opalCompiler.compile('code.rb', 'build/result-js.js');
