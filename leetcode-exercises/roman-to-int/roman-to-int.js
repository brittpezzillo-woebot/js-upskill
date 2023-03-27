"use strict";

/**
 * @param {string} s
 * @return {number}
 */

// 4: IV
// 9: IX
// 40 XL
// 90: XC
// 400: CD
// 900: CM

const romanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

// Normally written smallest left to right'
// Because the one is before the five we subtract it making four for IV

const romanToInt = function (s) {
  let val = 0;

  if (s.includes("IV")) {
    val += romanNumerals.IV;
    s.replace("IV", "");
  }

  if (s.includes("IX")) {
    val += romanNumerals.IX;
    s.replace("IX", "");
  }

  if (s.includes("XL")) {
    val += romanNumerals.XL;
    s.replace("XL", "");
  }

  if (s.includes("XC")) { 
    val += romanNumerals.XC;
    s.replace("XC", "");

  if (s.includes("CD")) val += romanNumerals.CD;

  if (s.includes("CM")) val += romanNumerals.CM;
};

const thingy = romanToInt("IV");
console.log(thingy);
