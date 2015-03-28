/* global describe, it */

describe('data', function () {
  describe('cities', function () {
    it('should parse', function () {
      require('../data/cities')
    })
  })

  describe('provinces', function () {
    it('should parse', function () {
      require('../data/provinces')
    })
  })

  describe('territories', function () {
    it('should parse', function () {
      require('../data/territories')
    })
  })
})
