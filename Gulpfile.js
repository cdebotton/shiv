'use strict';

var to5 = require('gulp-6to5');
var Pruno = require('pruno')
  .use(require('gulp'));

function to5Task(params) {
  this.params = params;
}

to5Task.prototype.enqueue = function(gulp, params) {
  gulp.src(params.search)
    .pipe(to5())
    .pipe(gulp.dest(params.dist));
};

to5Task.prototype.generateWatcher = function(gulp, params) {
  return true;
};

to5Task.displayName = 'to5';

to5Task.getDefaults = function() {
  return {
    search: '::src/**/*.js',
    dist: '::dist'
  };
};

Pruno.extend(to5Task);

Pruno(function(mix) {
  mix.to5();
});
