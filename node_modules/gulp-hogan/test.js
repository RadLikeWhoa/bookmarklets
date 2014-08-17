'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var hogan = require('./index');

it('should compile Markdown to HTML', function (cb) {
        var stream = hogan({handle: 'gnumanth'});

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.js');
                assert.equal(file.contents.toString(), 'gnumanth');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.hogan',
                contents: new Buffer('{{handle}}')
        }));
});