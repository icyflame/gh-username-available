'use strict';
module.exports = function (username, cb) {
  var got = require('got');
  got('https://api.github.com/users/' + username, function (err, data, res) {
    if (err && res.statusCode !== 404) {
      console.log(require('util').inspect(err, { depth: null }));
      return cb(err, undefined);
    }
    if (res.statusCode === 200) {
      return cb(null, false);
    } else if (res.statusCode === 404) {
      return cb(null, true);
    }
  });
};
