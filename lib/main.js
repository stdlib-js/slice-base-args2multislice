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

/* eslint-disable max-len */

'use strict';

// MODULES //

var MultiSlice = require( '@stdlib/slice-multi' );


// MAIN //

/**
* Creates a MultiSlice object from a list of MultiSlice constructor arguments.
*
* @param {(Slice|integer|null|void)} args - constructor arguments
* @returns {MultiSlice} MultiSlice object
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = args2multislice( [ void 0, new Slice( 0, 10, 1 ) ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice> ]
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = args2multislice( [ new Slice( 0, 10, 1 ), void 0 ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null ]
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = args2multislice( [ new Slice( 0, 10, 1 ), void 0, void 0, new Slice( 0, 10, 1 ) ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null, null, <Slice> ]
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = args2multislice( [ void 0, new Slice( 0, 10, 1 ), null,  void 0, new Slice( 2, 9, 2 ), null, void 0 ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
*/
function args2multislice( args ) {
	switch ( args.length ) {
	case 0:
		return new MultiSlice();
	case 1:
		return new MultiSlice( args[ 0 ] );
	case 2:
		return new MultiSlice( args[ 0 ], args[ 1 ] );
	case 3:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ] );
	case 4:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ] );
	case 5:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ] );
	case 6:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ], args[ 5 ] );
	case 7:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ], args[ 5 ], args[ 6 ] );
	case 8:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ], args[ 5 ], args[ 6 ], args[ 7 ] );
	case 9:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ], args[ 5 ], args[ 6 ], args[ 7 ], args[ 8 ] );
	case 10:
		return new MultiSlice( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ], args[ 5 ], args[ 6 ], args[ 7 ], args[ 8 ], args[ 9 ] );
	default:
		return MultiSlice.apply( null, args );
	}
}


// EXPORTS //

module.exports = args2multislice;
