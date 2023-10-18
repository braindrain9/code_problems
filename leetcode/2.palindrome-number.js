/**
 * Link: https://leetcode.com/problems/palindrome-number
 *
 * Description:
 * Given an integer x, return true if x is a
 * palindrome, and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

const isPalindrome = function(x) {
    // 1. Convert to String array and reverse. ~ Runtime: 129 ms; Memory: 50.83 MB

    // const reversed = `${x}`.split('').reverse().join(''); // use `` instead of toString as toString cuts `-` symbols

    // return `${x}` === reversed;
    // -------------------------------------------------------- //

    // 2. Without converting the integer to a string. ~Runtime: 135 ms; Memory: 49.86 MB
    if (x < 0) { // as input is integer, filter out all negative values
      return false;
    }

    return x === getPalindrome(x);
};

const countDigits = function (num) {
  let count = 0;

  while (num >= 1) { // start counting from 1, 0 is palindrome
      num = num / 10;
      count++;
  }

  return count;
}

const getPalindrome = function (num) {
  let digitsCount = countDigits(num);
  let palindrome = '';

  for(let i = 0, digit = 0; i < digitsCount; i++) {
    digit = num % 10;
    palindrome += digit;

    num = (num - digit) / 10;
  }

  return +palindrome;
}

// Test Cases:
isPalindrome(121); // true
isPalindrome(-121); // false
isPalindrome(10); // false
isPalindrome(0); // true
