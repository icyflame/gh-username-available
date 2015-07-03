# gh-username-available [![Build Status](https://travis-ci.org/icyflame/gh-username-available.svg?branch=master)](https://travis-ci.org/icyflame/gh-username-available)

> Find out whether a GitHub username is available or taken


## Install

```
$ npm install --save gh-username-available
```


## Usage

```js
var ghUsernameAvailable = require('gh-username-available');

ghUsernameAvailable('icyflame', function (err, value){
  console.log(value)
  //=> false
});

ghUsernameAvailable('harry-potter-1', function (err, value){
  console.log(value)
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

### ghUsernameAvailable(username)

#### username

*Required*  
Type: `string`

Username that you are trying to check


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
