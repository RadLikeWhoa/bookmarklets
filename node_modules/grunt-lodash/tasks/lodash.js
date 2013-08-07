module.exports = function(grunt) {
  'use strict';

  var pkg = require('lodash/package.json');
  var bin = pkg.bin.lodash;
  var builder = require.resolve('lodash/' + bin);

  var _ = require('lodash');

  var customOptions = ['modifier', 'flags', 'shortFlags'];

  var omitCustom = _.partialRight(_.omit, function(value, key) {
    return _.contains(customOptions, key);
  });

  /** Register the task with Grunt */
  grunt.registerMultiTask('lodash', 'Builds a customized Lo-Dash', function() {
    var done = this.async();
    var opts = this.options({
      'modifier': '',
      'flags': [],
      'shortFlags': []
    });

    var args = _.map(omitCustom(opts), function(val, opt) {
      if (_.isArray(val)) {
        val = val.join(',');
      }
      return opt + '=' + val;
    });

    var flags = _.map(opts.flags, function(flag) {
      if (flag.indexOf('--') > -1) {
        return flag;
      }
      return '--' + flag;
    });

    var shortFlags = _.map(opts.shortFlags, function(flag) {
      if (flag.indexOf('-') > -1) {
        return flag;
      }
      return '-' + flag;
    });

    var command = [builder];
    if (opts.modifier) {
      command.push(opts.modifier);
    }

    var output = ['--output', this.files[0].dest];
    var spawnArgs = command.concat(args, flags, shortFlags, output);

    grunt.verbose.writeln('Lo-Dash Version: ' + _.VERSION);
    grunt.verbose.writeln('Build Arguments: ' + spawnArgs.join(' '));

    grunt.util.spawn({
      'cmd': 'node',
      'args': spawnArgs
    }, function(err, data) {
      if (err) {
        grunt.log.error(err.toString());
        done(err);
      }
      grunt.verbose.write(data.toString());
      done();
    });
  });

};
