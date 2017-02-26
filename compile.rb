require 'opal'

builder = Opal::Builder.new
builder.append_paths('.')
builder.build('code.rb')
File.write 'build/result-ruby.js', builder.to_s
