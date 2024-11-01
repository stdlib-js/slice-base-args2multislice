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

var bench = require( '@stdlib/bench-harness' );
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );
var S = require( '@stdlib/slice-ctor' );
var M = require( '@stdlib/slice-multi' );
var pkg = require( './../package.json' ).name;
var args2multislice = require( './../lib' );


// MAIN //

bench( pkg+':ndims=0', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = args2multislice( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::baseline:ndims=0', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = M.apply( null, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=1', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null ],
		[ 10 ],
		[ void 0 ],
		[ new S( 0, 10, 2 ) ],
		[ new S( null, 10, 2 ) ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = args2multislice( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::baseline:ndims=1', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null ],
		[ 10 ],
		[ void 0 ],
		[ new S( 0, 10, 2 ) ],
		[ new S( null, 10, 2 ) ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = M.apply( null, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=2', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null ],
		[ void 0, void 0 ],
		[ 2, 10 ],
		[ null, new S( null, null, null ) ],
		[ 2, new S( 2, 10, 2 ) ],
		[ new S( 2, 10, 2 ), null ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = args2multislice( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::baseline:ndims=2', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null ],
		[ void 0, void 0 ],
		[ 2, 10 ],
		[ null, new S( null, null, null ) ],
		[ 2, new S( 2, 10, 2 ) ],
		[ new S( 2, 10, 2 ), null ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = M.apply( null, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=3', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null, null ],
		[ void 0, void 0, void 0 ],
		[ 2, 10, 5 ],
		[ null, new S( null, null, null ), null ],
		[ 2, new S( 2, 10, 2 ), new S( 2, 10, 2 ) ],
		[ new S( 2, 10, 2 ), null, new S( 2, 10, 2 ) ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = args2multislice( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::baseline:ndims=3', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null, null ],
		[ void 0, void 0, void 0 ],
		[ 2, 10, 5 ],
		[ null, new S( null, null, null ), null ],
		[ 2, new S( 2, 10, 2 ), new S( 2, 10, 2 ) ],
		[ new S( 2, 10, 2 ), null, new S( 2, 10, 2 ) ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = M.apply( null, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=4', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null, null, null ],
		[ void 0, void 0, void 0, void 0 ],
		[ 2, 10, 5, 4 ],
		[ null, new S( null, null, null ), null, new S( 2, 10, 2 ) ],
		[ 2, new S( 2, 10, 2 ), new S( 2, 10, 2 ), 10 ],
		[ new S( 2, 10, 2 ), null, new S( 2, 10, 2 ), null ],
		[ new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ) ] // eslint-disable-line max-len
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = args2multislice( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::baseline:ndims=4', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null, null, null ],
		[ void 0, void 0, void 0, void 0 ],
		[ 2, 10, 5, 4 ],
		[ null, new S( null, null, null ), null, new S( 2, 10, 2 ) ],
		[ 2, new S( 2, 10, 2 ), new S( 2, 10, 2 ), 10 ],
		[ new S( 2, 10, 2 ), null, new S( 2, 10, 2 ), null ],
		[ new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ) ] // eslint-disable-line max-len
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = M.apply( null, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=5', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null, null, null, null ],
		[ void 0, void 0, void 0, void 0, void 0 ],
		[ 2, 10, 5, 4, 5 ],
		[ null, new S( null, null, null ), null, new S( 2, 10, 2 ), null ],
		[ 2, new S( 2, 10, 2 ), new S( 2, 10, 2 ), 10, new S( null, 5, 1 ) ],
		[ new S( 2, 10, 2 ), null, new S( 2, 10, 2 ), null, new S( 2, 10, 2 ) ],
		[ new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ) ] // eslint-disable-line max-len
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = args2multislice( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::baseline:ndims=5', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ null, null, null, null, null ],
		[ void 0, void 0, void 0, void 0, void 0 ],
		[ 2, 10, 5, 4, 5 ],
		[ null, new S( null, null, null ), null, new S( 2, 10, 2 ), null ],
		[ 2, new S( 2, 10, 2 ), new S( 2, 10, 2 ), 10, new S( null, 5, 1 ) ],
		[ new S( 2, 10, 2 ), null, new S( 2, 10, 2 ), null, new S( 2, 10, 2 ) ],
		[ new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ), new S( 2, 10, 2 ) ] // eslint-disable-line max-len
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = M.apply( null, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a multi-slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
