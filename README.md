# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs (AKA The Best Bootcamp (B)ever). 

## Usage

**Install it:**

`npm install @evanquirk/lotide`

**Require it:**

`const _ = require('@evanquirk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqualArrays`: check to see if Arrays are equal - chai redundancy.
* `assertEqual`: check to see if values are equal - chai redundancy.
* `assertObjectEqual`: check to see if objects are equal - chai redundancy.
* `countLetters` (string): give an object and a list of values, it resturns the number of occurances of each.
* `countOnly` (allItems, itemsToCount) give an object a list of values, it returns the number of occurances of each.
* `eqArrays`(array1, array2): Test if two arrays are equal.
* `eqObjects`(object1, object 2): Test if two objects are equal.
* `findKey` (object, callback): Give an object and a callback function. It returns the key associated with the function.
* `findKeyByValue`(object, objectValue) : Give an object and a value, it returns the key with that value.
* `flatten`(array) : Given a nested array, it returns a flat array of the same elements.
* `head` (array): Give an array, and it will remove the first element.
* `letterPositions` (string): Give a string, it will return an object with an array of indexes for each letter."
* `map`(aray, callback): Give an array and a callback function, it returns an array with the function applied.
* `middle`(array): Returns the middle element of an array. If the array is even, it will return both middle numbers.
* `tail`(array): Give an array, and return the array without the first element.
* `takeUntil`(array, callback): Given an array and a callback function, it returns all the elements up to a match.
* `without`(array, array): Give an array, and a list to exclude. Returns an array with excluded elements.


