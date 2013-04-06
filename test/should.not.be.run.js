var assert = require('assert');

describe('should-not-be-run', function () {
    it('should not be run', function () {
        // This test should never be run because it doesn't match the glob test/**/*.mocha.js
        assert(false);
    });
});
