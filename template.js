/*
 * grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Scaffold a Chrome App';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {


  grunt.util._.extend( init.prompts, {
    minimum_chrome_version: "Mininum Chrome Version",
    default: function(value, data, done) {
      done( null, false );
    }
  });

  init.process({type: 'chromeapp'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'The best Chrome App of all time.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'img/*'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.name,
      version: props.version,
      // TODO: pull from grunt's package.json
      node_version: '>= 0.8.0',
      devDependencies: {
        // TODO: ADJUST VERSIONS FOR 0.4.0 FINAL
        'grunt-contrib-jshint': '0.1.1rc6',
        'grunt-contrib-watch': '0.2.0rc5',
        // TODO: REMOVE FOR 0.4.0 FINAL
        'grunt': '0.4.0rc7'
      },
    });


    // Generate manifest.json file using package.jsos sugar, using callback
    // to add Chrome App specific parameters.
    init.writePackageJSON('manifest.json', props, function(pkg) {

      // Add Chrome App specific parameters for manifest.json
      pkg.name = pkg.title;
      pkg.manifest_version = 2;
      pkg.icons = {
        "16": "img/icon_16.png",
        "128": "img/icon_128.png"
      };
      pkg.app = {
        background: {
          scripts: ["js/main.js"]
        }
      }

      // Remove superfluous properties
      "author title homepage repository bugs licenses".split(" ").forEach(function(k) {
        delete pkg[k];
      });

      return pkg;
    });

    // All done!
    done();
  });

};
