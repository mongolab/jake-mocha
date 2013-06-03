/*
 * Copyright (c) 2013 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

var mocha = require('./lib/jake-mocha');
mocha.defineTask(
        {
            name: 'mocha',
            files: 'test/**/*.mocha.js',
            mochaOptions: {
                ui: 'bdd',
                reporter: 'spec'
            }
        }
);
task('default', ['mocha']);
