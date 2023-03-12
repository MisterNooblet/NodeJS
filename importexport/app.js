// What is the difference between import and require?

//the difference between import and require is that require is used in node since node hasnt been introduced to ES6 imports yet , so we use it like this:
// const someFunc = require('./functions.js') | const redux = require('redux')
//while in ES6 We use the import statement as follows
//import {someFunc} from './functions.js' | import functions from './functions.js' etc......



// How can you enable using the import syntax using node js?

// you have to specify the type as module in package.json



// Give 2 node.js environment variables that are not available when using the import syntax.

//  __dirname and __filename.


// Create 3 functions using the export /import syntax.

import { greet, gbye, getDate } from './functions.js'


// Import the file system module using the import syntax.

import fs from 'fs'
