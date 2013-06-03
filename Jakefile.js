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
