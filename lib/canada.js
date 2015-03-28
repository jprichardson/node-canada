var provinces = require('../data/provinces')
var cities = require('../data/cities')
var territories = require('../data/territories')

var regions = {}

Object.keys(provinces).forEach(function (abbr) {
  regions[abbr] = provinces[abbr]
})

Object.keys(territories).forEach(function (abbr) {
  regions[abbr] = territories[abbr]
})

module.exports = {
  cities: cities,
  provinces: provinces,
  regions: regions,
  territories: territories
}
