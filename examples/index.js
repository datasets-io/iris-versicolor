'use strict';

var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( './../lib' );

// Convert the data arrays to a matrix:
var mat = toMatrix([
	data.sepal.len,
	data.sepal.width,
	data.petal.len,
	data.petal.width
]);

// Calculate the sample mean along the rows:
console.log( mean( mat ).toString() );

// Calculate the sample variance along the rows:
console.log( variance( mat ).toString() );
