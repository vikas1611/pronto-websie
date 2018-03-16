const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minify = require('gulp-minify-css');
const merge = require('merge-stream');
const webserver = require('gulp-webserver');


/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

//Logs Message
gulp.task('message', function(){
	return console.log('Gulp is rinning...');
});

 // Copy All HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// Minify JS
gulp.task('minify', function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function(){
  var scssStream = gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(concat('scss-files.scss'))
  ;
  var mergedStream = merge(scssStream)
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('dist/css'));

    return mergedStream;
  // gulp.src('src/sass/*.scss')
  //     .pipe(sass().on('error', sass.logError))
  //     .pipe(concat('style.css'))
  //     .pipe(minify())
  //     .pipe(gulp.dest('dist/css'));
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src(['src/fonts/*.OTF'])
     .pipe(gulp.dest('dist/fonts/'));
});


// Video
gulp.task('video', function() {
    return gulp.src(['src/video/*'])
     .pipe(gulp.dest('dist/video/'));
});

// Scripts
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// gulp.task('webserver', function() {
//   gulp.src('dist')
//     .pipe(webserver({
//       host: 'localhost',
//       port: 3030,
//       // livereload: true,
//       directoryListing: false,
//       open: true,
//       // fallback: './dist/index.html'
//     }));
// });

gulp.task('server', function() {
  return gulp.src('dist/*.js')
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts', 'fonts', 'video', 'server'], function(){
	// gulp.start(['webserver']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});

