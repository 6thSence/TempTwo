var gulp = require('gulp'),
	wiredep = require('wiredep').stream;
 
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      derictory: "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', function (){
	gulp.watch('bower.json',['bower']);
})