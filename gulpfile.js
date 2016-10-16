
/*
This will install gulp and the --save-dev will add gulp as a devDependency in your package.json file.
npm install --save-dev gulp
npm install --save-dev gulp-sass
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('s', function() {
    gulp.src('themes/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});


//Watch task
gulp.task('d',function() {
    gulp.watch('themes/**/*.scss',['s']);
});