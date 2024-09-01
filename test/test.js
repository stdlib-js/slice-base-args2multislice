/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSlice = require( '@stdlib/assert-is-slice' );
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var args2multislice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof args2multislice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function creates a MultiSlice from a list of constructor arguments', function test( t ) {
	var expected;
	var actual;
	var values;
	var data;
	var v;
	var e;
	var s;
	var i;
	var j;

	/* eslint-disable new-cap */

	values = [
		[ null, S( null, null, null ) ],
		[ S( 2, 10, 2 ), 10 ],
		[ S( -2, -10, -2 ) ],
		[ S( null, 10, 2 ), 10, null ],
		[ 2, 10, S( 2, null, 2 ) ],
		[ null, 10, S( 2, 10, null ) ],
		[ null, null, S( null, null, 2 ), 10 ],
		[ 2, 10, 4, S( 2, null, null ) ],
		[ S( null, 10, null ), 1, 2, 3, 4 ],
		[ S( -1, null, -2 ), S( 2, 10, 1 ) ],
		[ void 0 ],
		[ null ],
		[ 2, 10, 1 ],
		[ 2 ],
		[ void 0, void 0, void 0 ],
		[ void 0, void 0 ],
		[],
		[ 1 ],
		[ 1, 2 ],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ],
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6, 7 ],
		[ 1, 2, 3, 4, 5, 6, 7, 8 ],
		[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
		[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
		[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
	];

	expected = [
		new MultiSlice( null, S( null, null, null ) ),
		new MultiSlice( S( 2, 10, 2 ), 10 ),
		new MultiSlice( S( -2, -10, -2 ) ),
		new MultiSlice( S( null, 10, 2 ), 10, null ),
		new MultiSlice( 2, 10, S( 2, null, 2 ) ),
		new MultiSlice( null, 10, S( 2, 10, null ) ),
		new MultiSlice( null, null, S( null, null, 2 ), 10 ),
		new MultiSlice( 2, 10, 4, S( 2, null, null ) ),
		new MultiSlice( S( null, 10, null ), 1, 2, 3, 4 ),
		new MultiSlice( S( -1, null, -2 ), S( 2, 10, 1 ) ),
		new MultiSlice( void 0 ),
		new MultiSlice( null ),
		new MultiSlice( 2, 10, 1 ),
		new MultiSlice( 2 ),
		new MultiSlice( void 0, void 0, void 0 ),
		new MultiSlice( void 0, void 0 ),
		new MultiSlice(),
		new MultiSlice( 1 ),
		new MultiSlice( 1, 2 ),
		new MultiSlice( 1, 2, 3 ),
		new MultiSlice( 1, 2, 3, 4 ),
		new MultiSlice( 1, 2, 3, 4, 5 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6, 7 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6, 7, 8 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6, 7, 8, 9 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ),
		new MultiSlice( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 )
	];

	/* eslint-enable new-cap */

	for ( i = 0; i < values.length; i++ ) {
		actual = args2multislice( values[ i ] );
		e = expected[ i ].data;
		data = actual.data;

		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( actual.ndims, expected[ i ].ndims, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( data.length, e.length, 'returns expected value. i: ' + i + '.' );
		for ( j = 0; j < e.length; j++ ) {
			s = data[ j ];
			v = e[ j ];
			if ( isSlice( v ) ) {
				t.strictEqual( s.start, v.start, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
				t.strictEqual( s.stop, v.stop, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
				t.strictEqual( s.step, v.step, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
			} else {
				t.strictEqual( s, v, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
			}
		}
	}
	t.end();
});
