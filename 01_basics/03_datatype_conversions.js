"use_strict"

//typeof
console.log(typeof 10);         // number
console.log(typeof "");         // string
console.log(typeof true);       // boolean
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
console.log(typeof NaN);        // number
console.log(typeof {});         // object
console.log(typeof []);         // object
console.log(typeof(()=>{}));    // function object


// convertion to number  => use Number to convert 
// If you are not familier with the incoming type first use typeof and then convert to number if required)
// After conversion please compare it to NaN then use it

const score_1 = Number("33")        // 33
const score_2 = Number("")          // 0
const score_3 = Number("33ab")      // other than number string  => NaN
const score_4 = Number(true)        // 1
const score_5 = Number(false)       // 0
const score_6 = Number(null)        // null ->  0
const score_7 = Number(undefined)   // undefined => NaN
const score_8 = Number(NaN)         // NaN  => NaN
const score_9 = Number({})          // NaN
const score_10 = Number([])         // 0
const score_11 = Number([1])        // 1
const score_12 = Number([1,2])      // NaN

console.table([score_1, score_2, score_3, score_4, score_5, score_6, score_7, score_8, score_9, score_10, score_11, score_12])


// convertion to boolean  => use Boolean to convert 
// false, empty string, null, undefined, NaN => treated as false rest true

const bool_1 = Boolean("33")        // true
const bool_2 = Boolean("")          // false
const bool_3 = Boolean("33ab")      // true
const bool_4 = Boolean(true)        // true
const bool_5 = Boolean(false)       // false
const bool_6 = Boolean(null)        // false
const bool_7 = Boolean(undefined)   // false
const bool_8 = Boolean(NaN)         // false
const bool_9 = Boolean({})          // true
const bool_10 = Boolean([])         // true
const bool_11 = Boolean([1])        // true
const bool_12 = Boolean([1,2])      // true

console.table([bool_1, bool_2, bool_3, bool_4, bool_5, bool_6, bool_7, bool_8, bool_9, bool_10, bool_11, bool_12])


// convertion to string  => use String to convert 
// internal part of array convert into string as it is
// Empty object or any object => '[object Object]'


const string_1 = String("33")                       // '33'
const string_2 = String("")                         // ''
const string_3 = String("33ab")                     // '33ab'
const string_4 = String(true)                       // 'true'
const string_5 = String(false)                      // 'false'
const string_6 = String(null)                       // 'null'
const string_7 = String(undefined)                  // 'undefined'
const string_8 = String(NaN)                        // 'NaN'
const string_9 = String({})                         // '[object Object]'
const string_10 = String({"name": "Pankaj"})        // '[object Object]'
const string_11 = String([])                        // ''
const string_12 = String([1])                       // '1'
const string_13 = String([1,2])                     // '1,2'

console.table([string_1, string_2, string_3, string_4, string_5, string_6, string_7, string_8, string_9, string_10, string_11, string_12, string_13])













