'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var mustache = require('mustache');
var fs = require('fs');

module.exports = function (view, options, partials) {
    options = options || {};
    partials = partials || {};

    var viewError = null;

    // if view is string, interpret as path to json filename
    if (typeof view === 'string') {
        try {
            view = JSON.parse(fs.readFileSync(view, 'utf8'));
        } catch (e) {
            viewError = e;
        }
    }

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit(
                'error',
                new gutil.PluginError('gulp-mustache', 'Streaming not supported')
            );
        }

        if (viewError) {
            this.emit(
                'error',
                new gutil.PluginError('gulp-mustache', viewError.toString())
            );
        }

        file.contents = new Buffer(mustache.render(file.contents.toString(), view, partials));
        if (typeof options.extension === 'string') {
            file.path = gutil.replaceExtension(file.path, options.extension);
        }
        this.push(file);
        cb();
    });
};
