'use strict';

var pruno = require('pruno')
       .use(require('gulp'));

pruno(function(mix) {
  mix.mocha({coffee: true});
});
