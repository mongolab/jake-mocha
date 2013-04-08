# jake-mocha

A utility for defining Mocha tasks in your Jakefiles.

## Usage

``` javascript
var mocha = require('jake-mocha');
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
```
