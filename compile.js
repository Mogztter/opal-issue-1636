var fs = require('fs');
var Builder = require('opal-compiler').Builder;

var builder = Builder.$new();
var result = builder.$build('code.rb').$to_s();
fs.writeFileSync('build/result-js.js', result, 'utf8');
