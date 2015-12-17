var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    webpack = require('webpack-stream'),
    webpackConfig = require("./webpack.config.js");

    gulp.task('server', function() {
      return gulp
                .src('./src/')
                .pipe(webserver());
    });

    gulp.task('default',['server'], function() {
      return gulp
                .src('./app/App.js')
                .pipe(webpack(webpackConfig));
    });
