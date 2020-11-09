var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    hash = require('gulp-hash'),
    minify = require('gulp-minify'),
    del = require('del'),
    gulpImagemin = require('gulp-imagemin');

const gridlyConfig = require('./gridly.json');
var gridlyBuild = require('./gridlyBuild');

function clean() {
    return del(['static/css/**/*', 'static/images/**/*', 'static/js/**/*', 'static/download-data/**/*']);
}

function cleanImages() {
    return del(['build']);
}

// Compile & hash SCSS files
function scss() {
    gulp.src('src/css/*.sass')
        .pipe(
            sass({
                outputStyle: 'compressed'
            })
        )
        .pipe(
            autoprefixer({
                browsers: ['last 20 versions']
            })
        )
        .pipe(hash())
        .pipe(gulp.dest('static/css'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/css'));
    return gulp.src(['src/css/**/*.css']).pipe(gulp.dest('static/css'));
}

function images() {
    return gulp.src('src/images/**/*').pipe(gulp.dest('static/images'));
}

function minImages() {
    gulp.src('src/images/**/*')
        .pipe(
            gulpImagemin([
                gulpImagemin.gifsicle({ interlaced: true }),
                gulpImagemin.mozjpeg({ quality: 75, progressive: true }),
                gulpImagemin.optipng({ optimizationLevel: 5 }),
                gulpImagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: true }]
                })
            ])
        )
        .pipe(gulp.dest('build/images'));

    return gulp
        .src('static/upload-data/**/*')
        .pipe(
            gulpImagemin([
                gulpImagemin.gifsicle({ interlaced: true }),
                gulpImagemin.mozjpeg({ quality: 75, progressive: true }),
                gulpImagemin.optipng({ optimizationLevel: 5 }),
                gulpImagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
                })
            ])
        )
        .pipe(gulp.dest('build'));
}

function scripts() {
    return (
        gulp
            .src('src/js/*.js')
            .pipe(minify())
            .pipe(hash())
            .pipe(gulp.dest('static/js'))
            .pipe(hash.manifest('hash.json'))
            .pipe(gulp.dest('data/js'))
    );
}

// Watch asset folder for changes
function watch() {
    gulp.watch('src/css/**/*', scss);
    gulp.watch('src/images/**/*', images);
    gulp.watch('src/js/**/*', scripts);
}

async function buildContent() {
    await gridlyBuild.run(gridlyConfig);

    return new Promise((resolve, reject) => {
        resolve();
    });
}

var buildImages = gulp.series(cleanImages, gulp.parallel(minImages));

var build = gulp.series(
    clean,
    gulp.parallel(scss, images, scripts, buildContent)
);

exports.watch = watch;
exports.buildImages = buildImages;
exports.build = build;
exports.default = build;
