var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		prefixer = require('gulp-autoprefixer'),
		jade = require('gulp-jade');
gulp.task('sass', function() {
	return gulp.src("app/sass/*.sass")
	.pipe(sass())
	.pipe(gulp.dest("app/css"))
	.pipe(browserSync.reload({stream: true}))
});
gulp.task("browserSync", function() {
	browserSync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});
gulp.task("prefixer", function() {
	gulp.src("app/css/main.css")
	.pipe(prefixer({
		browsers: ['last 3 versions', '>2%'],
		cascade: false
	}))
	.pipe(gulp.dest("dist/dist/css"))
});
gulp.task('jade', function() {
	return gulp.src('app/*.jade')
		.pipe(jade()) 
		.pipe(gulp.dest('app/'))
		.pipe(browserSync.stream());
});
gulp.task("watch", ["browserSync", "sass", "jade", "prefixer"], function() {
	gulp.watch("app/sass/*.sass", ["sass"]);
	gulp.watch("app/*.jade").on('change', function() {
		gulp.run(['jade'])
		browserSync.reload()
	});
	gulp.watch("app/*.html", browserSync.reload);
	gulp.watch("app/js/*.js");
});