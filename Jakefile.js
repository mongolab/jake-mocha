var mocha = require('./lib/jake-mocha');

mocha.loadTask(
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
