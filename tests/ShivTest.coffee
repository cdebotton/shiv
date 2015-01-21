shiv = null
koa = require 'koa'

describe 'Shiv', ->
  beforeEach -> shiv = require '../src'

  it 'should store an instance of koa in it\'s #app parameter', ->
    shiv.app.should.be.an.instanceOf koa

  describe '#get(...)', ->
    beforeEach -> shiv = require '../src'

    it 'should be able to get properties', ->
      shiv.map.foo = 'bar'
      shiv.get('foo').should.equal 'bar'

  describe '#set(...)', ->
    beforeEach -> shiv = require '../src'

    it 'should be able to set properties', ->
      shiv.set('foo', 'bar')
      shiv.map.foo.should.equal 'bar'
