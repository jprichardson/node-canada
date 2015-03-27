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


### cities

**example:**

```js
var canada = require('canada')

// get array of cities and their provinces
var cities = canada.cities

// city name and province
var cityData = cities[0]
var city = cityData[0]
var province = cityData[1]

// you could map it into a nicer data structure
var cities = canada.cities.map(function (cityData) {
  return {
    city: cityData[0],
    province: cityData[1]
  }
})

// you could group cities by province
var citiesInProvince = {}
canada.cities.forEach(function (cityData) {
  if (!citiesInProvince[cityData[1]]) {
    citiesInProvince[cityData[1]] = []
  }

  var cities = citiesInProvince[cityData[1]]
  cities.push(cityData[0])
})
```



License
-------

MIT