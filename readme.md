# gh-username-available

> Find out whether a GitHub username is available or taken

[![Build Status](https://travis-ci.org/icyflame/gh-username-available.svg?branch=master)](https://travis-ci.org/icyflame/gh-username-available)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save gh-username-available
```


## Usage

```js
var ghUsernameAvailable = require('gh-username-available');

ghUsernameAvailable('icyflame', function (err, value) {
  console.log(value);
  //=> false
});

ghUsernameAvailable('harry-potter-1', function (err, value) {
  console.log(value);
  //=> true
});
```


## CLI

```
$ npm install --global gh-username-available
```
```
$ gh-username-available --help

  Usage
    $ gh-username-available username

  Examples
    $ gh-username-available icyflame
    ✖ Taken

    $ gh-username-available harry-potter-1
    ✔ Available

```


## API

### ghUsernameAvailable(username, callback)

#### username

*Required*  
Type: `string`

Username that you are trying to check

#### callback(err, value)

*Required*

value is `true` if the username is available, and `false`
if it is taken.


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
