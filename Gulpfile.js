'use strict';

var pruno = require('pruno')
       .use(require('gulp'));

require('./mixes/6to5');

pruno(function(mix) {
  mix
    .del()
    .to5()
    .mocha({
      coffee: true,
      search: ['./dist/**/*.js', './tests/**/*.js', './tests/**/*.coffee']
    });
});
