"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require('gulp-sass')(require('sass'));

const dist = "./dist/";
// const dist = "C:/MAMP/htdocs/test"; // link on your folder with server

gulp.task("build-style", () => {
  return gulp.src("./src/assets/sass/style.scss")
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(browsersync.stream());
});

gulp.task("copy-html", () => {
  return gulp.src("./src/*.html")
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
  return gulp.src(["!.src/assets/sass/**/*", "./src/assets/**/*.*"])
    .pipe(gulp.dest(dist + "/assets"))
    .on("end", browsersync.reload);
});

gulp.task("watch", () => {
  browsersync.init({
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    port: 4000,
    notify: true
  });

  gulp.watch("./src/*.html", gulp.parallel("copy-html"));
  gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/assets/css/*.css", gulp.parallel("build-style"));
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js", "build-style"));

gulp.task("build-prod-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));