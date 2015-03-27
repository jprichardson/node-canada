JavaScript: Canada
==================

Fetch provinces and cities from Canada.


Installation
------------

    npm install --save canada


Methods / Properties
--------------------

### provinces

**example:**

```js
var canada = require('canada')

// get object mapping abbreviations to full names
var provinces = canada.provinces

// get abbreviations
var abbrs = Object.keys(provinces)

// get full province names
var provinceNames = Object.keys(provinces).map(function (abbr) {
  return provinces[abbr]
})
```






License
-------

MIT