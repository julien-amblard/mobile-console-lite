const gulp 				= require('gulp');
const livereload 		= require('gulp-livereload');
const babel 			= require('gulp-babel');
const watch 			= require('gulp-watch');
const rename 			= require('gulp-rename');
//test
gulp.task('watch', () => {
	gulp.watch('src/*.js', ['js']);
	livereload.listen();
});

gulp.task('js', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/'))
});

gulp.task('default', ['js', 'watch']);
