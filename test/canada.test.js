var assert = require('assert')
var canada = require('../')

/* global describe, it */

describe('canada', function () {
  describe('+ provinces', function () {
    it('should return the provinces', function () {
      var provinces = canada.provinces
      assert(provinces)

      var abbrs = Object.keys(provinces)
      assert.equal(abbrs.length, 10)
      assert(abbrs.indexOf('BC'), 1)

      var provinceNames = abbrs.map(function (abbr) {
        return provinces[abbr]
      })
      assert.equal(provinceNames.length, 10)
      assert(provinceNames.indexOf('BRITISH COLUMBIA'))
    })
  })

  describe('+ cities', function () {
    it('should return the array of cities as found in the JSON', function () {
      var cities = canada.cities
      assert(cities)
      assert(cities.length > 100)

      // verify each has both a city and province
      cities.forEach(function (cityData) {
        assert.equal(cityData.length, 2)
      })
    })
  })

  describe('+ territories', function () {
    it('should return the array of territories found in the JSON', function () {
      var territories = canada.territories
      assert(territories)

      var abbrs = Object.keys(territories)
      assert.equal(abbrs.length, 3)
    })
  })

  describe('+ regions', function () {
    it('should combine both provinces and territories', function () {
      var regions = canada.regions
      assert(regions)

      var abbrs = Object.keys(regions)
      assert.equal(abbrs.length, 13)
    })
  })
})
