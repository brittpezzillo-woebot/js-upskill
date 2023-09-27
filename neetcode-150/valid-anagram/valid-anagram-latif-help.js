'use strict';

/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

What are ways we can approach this without using built in Array methods, such as inclues() or contains()

*/

/**
 *
 * @param {string} s The first word/phrase
 * @param {string} t The second word/phrase
 */

const isAnagram = function (s, t) {
  // function

  s = s.replace(/\s/g, '');
  t = t.replace(/\s/g, '');
  // Guard clause to abort if lengths not equal - if they are not equal we know it can't possibly be an anagram
  if (s.length !== t.length) {
    console.log(
      `Word lengths do not match: ${s} : ${s.length}, ${t} : ${t.length} - Cannot be an Anagram`
    );
    return false;
  }

  let hash1 = {};
  let hash2 = {};

  for (let i = 0; i < s.length; i++) {
    hash1 = {
      ...hash1,
      [s[i]]: hash1[s[i]] ? hash1[s[i]] + 1 : 1,
    };
    hash2 = {
      ...hash2,
      [t[i]]: hash2[t[i]] ? hash2[t[i]] + 1 : 1,
    };
  }
  console.log('hash1', hash1);
  console.log('hash2', hash2);
  return Object.keys(hash1).every(
    key => hash2.hasOwnProperty(key) && hash2[key] === hash1[key]
  );
};

// Test Data
const word1 = 'heart';
const word2 = 'earth';

const word3 = 'pancake';
const word4 = 'weasel';

const word5 = 'able';
const word6 = 'rent';

console.log(`TEST 1 [it can correctly detect an anagram] ---->`);
console.log(isAnagram(word1, word2));

console.log(`TEST 2 [word lengths do not match] ---->`);
isAnagram(word3, word4);

console.log(`TEST 3 [two words of equal length that are not anagrams] ---->`);
console.log(isAnagram(word5, word6));

console.log(
  `TEST 4 [two words of equal length that have a common letter] ----->`
);
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('tooled', 'toledo'));
console.log(isAnagram('gold and silver', 'grand old evils'));
console.log(isAnagram('dormitory', 'dirty room'));
