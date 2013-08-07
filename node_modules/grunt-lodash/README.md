# grunt-lodash <sup>v0.2.0</sup>

Grunt wrapper around the Lo-Dash build tool.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lodash --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lodash');
```

### Overview
In your project's Gruntfile, add a section named `lodash` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  'lodash': {
    'build': {
      // output location
      'dest': 'build/lodash.build.js',
      'options': {
        // modifiers for prepared builds
        // backbone, legacy, modern, mobile, strict, underscore
        'modifier': 'backbone'
      }
    }
  }
});
```
As you might have guessed, this would produce the same output as

```shell
lodash backbone -o build/lodash.build.js
```

## All configuration options

More information can be found in the [Lo-Dash custom builds section](http://lodash.com/#custom-builds)

```javascript
'lodash': {
  'target': {
    // output location
    'dest': 'build/lodash.build.js'
  },
  'options': {
    // modifiers for prepared builds
    // backbone, legacy, modern, mobile, strict, underscore
    'modifier': 'backbone',
    'category': ['collections', 'functions'],
    'exports': ['amd', 'commonjs', 'node'],
    'iife': '!function(window,undefined){%output%}(this)',
    'include': ['each', 'filter', 'map'],
    'minus': ['result', 'shuffle'],
    'plus': ['random', 'template'],
    'template': './*.jst',
    'settings': '{interpolate:/\\{\\{([\\s\\S]+?)\\}\\}/g}',
    'moduleId': 'underscore',
    // with or without the --
    // these are the only tested options,
    // as the others don't make sense to use here
    'flags': [
      '--stdout',
      'debug',
      '--minify',
      'source-map'
    ],
    // with or without the -
    // these are the only tested options,
    // as the others don't make sense to use here
    'shortFlags': [
      'c',
      '-d',
      'm',
      '-p'
    ]
  }
}
```

## Support

grunt-lodash has been tested in at least Node.js 0.8.19-0.10.7 (Node bug [#5622](https://github.com/joyent/node/issues/5622) prevents 0.10.8-0.10.10 from working)

## Release Notes

### <sup>v0.2.0</sup>

* Configuration syntax uses "grunt-style"
* Ability to specify custom version of Lo-Dash through peerDependency
* Use `grunt.util.spawn` to use Lo-Dash's build process directly
* Full test suite

The full changelog is available [here](https://github.com/lodash/grunt-lodash/wiki/Changelog).

## Contributing
If you like to file an issue or submit a pull request, please check the [contributing guidelines](https://github.com/lodash/grunt-lodash/blob/master/CONTRIBUTING.md)

## Resources
+ [grunt](https://github.com/gruntjs/grunt)
+ [Getting started](http://gruntjs.com/getting-started)
+ [Lo-Dash](http://lodash.com/)

## Author

| [![twitter/blainebublitz](http://secure.gravatar.com/avatar/ac1c67fd906c9fecd823ce302283b4c1?s=70)](http://twitter.com/blainebublitz "Follow @BlaineBublitz on Twitter") |
|---|
| [Blaine Bublitz](http://iceddev.com/) |


## Contributors

| [![twitter/jdalton](http://gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=70)](http://twitter.com/jdalton "Follow @jdalton on Twitter") | [![twitter/kitcambridge](http://gravatar.com/avatar/6662a1d02f351b5ef2f8b4d815804661?s=70)](https://twitter.com/kitcambridge "Follow @kitcambridge on Twitter") | [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|---|---|
| [John-David Dalton](http://allyoucanleet.com/)| [Kit Cambridge](http://kitcambridge.github.io/) | [Mathias Bynens](http://mathiasbynens.be/) |
