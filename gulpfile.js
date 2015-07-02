var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

// Sass compiling
gulp.task('sass',function(){
    sass('scss/',{
        style:'compressed'
    })
    .on("error",console.error.bind(console))
    .pipe(gulp.dest('css/'))
    .pipe(livereload());
});

gulp.task('html-livereload',function(){
    gulp.src(['**/*.html'])
    .pipe(livereload())
});

gulp.task('css-livereload',function(){
    gulp.src(['css/**/*.css'])
    .pipe(livereload())
});

gulp.task('js-livereload',function(){
    gulp.src(['app/**/*.js','js/**/*.js'])
    .pipe(livereload())
});

// Watch files
gulp.task('watch',function(){
    livereload.listen();
    gulp.watch(['scss/**/*.scss'],['sass']);
    gulp.watch(['**/*.html'],['html-livereload']);
    gulp.watch(['css/**/*.css'],['css-livereload']);
    gulp.watch(['app/**/*.js','js/**/*.js'],['js-livereload']);

});

//minify and concate js files    
gulp.task('minify-js', function(){
    return gulp.src(['./app/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'))
    ;
});

gulp.task('default',['sass','watch']);