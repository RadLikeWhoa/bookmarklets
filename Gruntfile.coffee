module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    folders:
      source: 'src'
      temp: '.tmp'
      dist: 'dist'

    clean:
      test: [ '<%= folders.temp %>/' ]
      dist: [ '<%= folders.dist %>/' ]

    lodash:
      options:
        exports: [ 'global' ]
        include: [ 'each' ]
        flags: [ 'minify' ]
      target:
        dest: '<%= folders.source %>/js/lodash.js'

    jst:
      compile:
        options:
          processName: (file) -> file.match(/\w+(?=\.)/)[0]
          templateSettings:
            variable: 'b'
        files:
          '<%= folders.temp %>/js/templates.js': [ '<%= folders.source %>/templates/*.jst' ]

    concat:
      data:
        options:
          separator: ','
          banner: 'var data = ['
          footer: ']'
        src: [ 'bookmarklets/*.json' ]
        dest: '<%= folders.temp %>/js/data.js'
        nocase: true

    compass:
      test:
        options:
          sassDir: '<%= folders.source %>/scss'
          cssDir: '<%= folders.temp %>/css'

    autoprefixer:
      test:
        options:
          browsers: [ 'last 2 versions' ]
        files:
          '<%= folders.temp %>/css/style.css': [ '<%= folders.temp %>/css/*.css' ]

    copy:
      test:
        files: [
          { expand: true, flatten: true, src: '<%= folders.source %>/index.html', dest: '<%= folders.temp %>/' }
          { expand: true, flatten: true, src: '<%= folders.source %>/js/*.js', dest: '<%= folders.temp %>/js/' }
        ]

    useminPrepare:
      options:
        dest: '<%= folders.dist %>/'
      html: '<%= folders.temp %>/index.html'

    usemin:
      html: '<%= folders.temp %>/index.html'

    htmlmin:
      dist:
        options:
          removeComments: true
          removeCommentsFromCDATA: true
          collapseWhitespace: true
          collapseBooleanAttributes: true
          removeAttributeQuotes: true
          removeRedundantAttributes: true
          removeEmptyAttributes: true
          removeOptionalTags: true
        files:
          '<%= folders.dist %>/index.html': '<%= folders.temp %>/index.html'

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.registerTask('test', [
    'clean:test',
    'jst:compile',
    'concat:data',
    'compass:test',
    'copy:test',
    'autoprefixer:test'
  ])

  grunt.registerTask('build', [
    'clean:dist',
    'test',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin',
    'htmlmin:dist',
    'clean:test'
  ])

  grunt.registerTask('default', [ 'build' ])