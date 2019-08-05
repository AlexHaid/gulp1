var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    include = require('gulp-include'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
    browserSync.watch('build', browserSync.reload)
});

gulp.task('pug', function() {
    return gulp.src('src/pug/*.pug', 'src/pug/pages/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) 
    .pipe(autoprefixer({
        cascade: false
    }))
    .on("error", notify.onError({
        title: "Error running something"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
});

gulp.task('include', function() {
    return gulp.src('src/js/*.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    gulp.watch(('src/pug/**/*.pug'), gulp.series('pug'));
    gulp.watch(('src/sass/**/*.scss'), gulp.series('sass'));
    gulp.watch(('src/js/*.js'), gulp.series('include'));
    gulp.watch(('src/img/*'), gulp.series('imagemin'));
});



gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass', 'imagemin', 'include'),
    gulp.parallel('watch', 'sync')
));