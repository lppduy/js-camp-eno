/**
 * JS FUNDAMENTALS
 * 14/11/2023
 * A. Kame 's lecture
 **/

// team 46 -> 3 vp * 15ng

// *** kw
// pl -> fwork -> structure -> design principle -> advanced topics
// clean code, domain knowledge

// *** doc
// a-z: mdn
// blog: toidicodedao, fullsnack huyld
// advanced how js work - session stack
// books clean code

// *** basics
/**
 * primitives - tham tri // <> tham chieu reference
 * operator
 * if - else - ternary operator
 * function
 * array
 * object
 */

/** primitive
 * number: Number() , +'57'
 * string
 * boolean
 * null
 * undefined
 *** use less:
 * symbol
 * bigInt
 */

//  null - 15 // -15
// undefined - 15 // NaN

/** Falsy value
 * Boolean(null) // false
 * !!undefined // false
 * !!0
 * !! ''
 * !!NaN
 **/

// == ===
// switch case => ===

// *** array
// - array access: [], destructuring
// arr = [1,2]; arr.length = 5 ; // arr = [1,2,empty x 3]
// add remove
// **** advice:
// - nen khoi tao mang rong, sau do push vao
// push O(1)
// unshift O(n)
// side effects
// delete letters[2] -> khong nen dung vi no chi gan gia tri la undefined
// => dung slice
// letters = ['a','b','c']
// letters.length = 0 // return 0, xoa phan tu mang cu -> aKame
// letters = [] // return [], chuyen qua mang moi

// array looping
// loop: for //len gan length de toi uu performance
// forEach -> k dung duoc khi muon break hay continue sớm

// map, filter, sort
// sort(a,b => a-b) // ab tang // ba giam
// reduce mọi người khó hiểu hơn => ko muốn ng khác hiểu lâu hơn => ko dùng nhiều

// common: isArray,indexOf,includes,slice, find, some , every
// !=: isInterger
// object
// constructor pattern

// Object.create9 , . assign .keys .values .freeze

// assignemnts
// 2. write a function for format money in shorten:
// 1000 ->
