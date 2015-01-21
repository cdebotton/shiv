invariant = require '../src/utils/invariant'

describe 'invariant', ->
  it 'should throw an error if the assertion fails', ->
    invariant.bind(null, 1 is 2).should.throw()

  it 'should not throw an error if the assertion passes', ->
    invariant.bind(null, 1 is 1).should.not.throw()

  it 'should throw the passed assertion error when failing', ->
    invariant.bind(null, 1 is 2, 'Expected 1 to equal 2')
      .should.throw('Expected 1 to equal 2')

  it 'should replace %s in error message with passed params', ->
    invariant.bind(
      null,
      5 is 4 and 3 is 3,
      'Expected a to be 4 and b to be 3, received a: %s, b: %s',
      5, 3
    ).should.throw 'Expected a to be 4 and b to be 3, received a: 5, b: 3'
