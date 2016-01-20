"use strict";

module.exports = {
  category: {
    // asset categories are comma-separated lists with file extensions
    audio: 'mp3',
    gfx: 'png,jpg,gif'
  },
  library: {
    // directories of library service
    archives: 'src',
    bundles: 'pub'
  },
  archive: {
    // location of configuration files in an archive
    topConfig: '[A-Z]+([0-9A-Za-z])+(.[A-Z]+([0-9A-Za-z]))/config.js',
    subConfig: 'sub/[A-Z]+([0-9A-Za-z])/config.js',
    bundleScripts: {
      home: 'publish',
      base: '+([A-Za-z])+(-+([A-Za-z]))',
      category: 'js'
    },
    // file name of versioned archive
    version: '+([0-9]).+([0-9]).+([0-9])',
    // regular expressions for archive versions
    pattern: {
      name: /^[A-Za-z]+(?:-[A-Za-z]+)+$/,
      version: /^\d+\.\d+\.\d+$/
    }
  },
  bundle: {
    // a bundle has a loader
    loader: 'bundle'
  },
  module: {
    // file locations in source tree of a module
    bootScript: 'boot.js',
    configScript: 'config.js',
    configScripts: {
      home: 'cfg',
      category: 'js'
    },
    classScripts: {
      home: 'cls',
      base: "**/[A-Z]+([0-9A-Za-z])",
      category: 'js'
    },
    publicAssets: {
      home: 'pub',
      base: '**/*',
      category: 'audio,gfx,js'
    }
  },
  tool: {
    // 'datafy' small assets in data URIs
    datafy: {
      category: 'audio,gfx',
      limit: 8192
    },
    // lint for JavaScript
    jshint: {
      camelcase: true,
      curly: true,
      eqeqeq: true,
      funcscope: false,
      immed: true,
      indent: 2,
      latedef: false,
      maxdepth: 4,
      maxlen: 100,
      noarg: true,
      predef: {
        ArrayBuffer: false,
        DataView: false,
        Float32Array: false,
        Float64Array: false,
        Int8Array: false,
        Int16Array: false,
        Int32Array: false,
        Uint8Array: false,
        Uint8ClampedArray: false,
        Uint16Array: false,
        Uint32Array: false,
        clearTimeout: false,
        setTimeout: false
      },
      undef: true,
      unused: 'vars'
    }
  }
};