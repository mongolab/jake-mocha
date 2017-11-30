# jake-mocha

A utility for defining [Mocha](http://mochajs.org/) tasks in your
[Jakefiles](https://github.com/mde/jake). Supports Unix-like [glob](http://en.wikipedia.org/wiki/Glob_%28programming%29)
patterns.

## Usage

``` javascript
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
```
