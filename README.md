# jake-mocha

A utility for defining mocha tasks in your Jakefiles.

## Usage

``` javascript
var mocha = require('jake-mocha');
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
```
