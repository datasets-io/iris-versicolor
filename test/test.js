/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-iris-versicolor', function tests() {

	it( 'should export an object', function test() {
		expect( data ).to.be.an( 'object' );
	});

	it( 'should have a `sepal` property', function test() {
		assert.hasProperty( data, 'sepal' );
		assert.isObject( data.sepal );
		assert.isArray( data.sepal.len );
		assert.isArray( data.sepal.width );
	});

	it( 'should have a `petal` property', function test() {
		assert.hasProperty( data, 'petal' );
		assert.isObject( data.petal );
		assert.isArray( data.petal.len );
		assert.isArray( data.petal.width );
	});

});
