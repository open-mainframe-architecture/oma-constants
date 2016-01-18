"use strict";

module.exports = {
  // asset categories are comma-separated lists with file extensions
  category: {
    audio: 'mp3',
    gfx: 'png,jpg,gif'
  },
  // directories of library service
  library: {
    archives: 'src',
    bundles: 'pub'
  },
  // location of configuration files in an archive
  archive: {
    topConfig: '[A-Z]+([0-9A-Za-z])+(.[A-Z]+([0-9A-Za-z]))/config.js',
    subConfig: 'sub/[A-Z]+([0-9A-Za-z])/config.js',
    bundleScripts: {
      home: 'publish',
      base: '+([A-Za-z])+(-+([A-Za-z]))',
      category: 'js'
    }
  },
  // a bundle has a loader
  bundle: {
    loader: 'bundle'
  },
  // file locations in source tree of a module
  module: {
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
  // configure tools for oma
  tool: {
    datafy: {
      category: 'audio,gfx',
      limit: 8192
    },
    jshint: {
      camelcase: true,
      curly: true,
      eqeqeq: true,
      funcscope: false,
      immed: true,
      indent: 2,
      latedef: 'nofunc',
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