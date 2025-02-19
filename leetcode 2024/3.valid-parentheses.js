/**
 * Link: https://leetcode.com/problems/valid-parentheses
 *
 * Description:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 *
 * Note: s consists of parentheses only '()[]{}'.
 */

const isValid = function(s) {
    // Solution 1. Runtime: 54 ms; Memory: 42.64 MB
    const bracketsPairs = {
      '[': ']',
      '(': ')',
      '{': '}',
    };

    // filter out invalid values: odd length, starts with closing char or ends with opening char
    if (s.length % 2 === 1 || !bracketsPairs[s[0]] || bracketsPairs[s[s.length - 1]]) {
      return false;
    }

    let openingBracketsStack = [];

    for (let bracket of s) {
      if (bracketsPairs[bracket]) {
        openingBracketsStack.push(bracket);
      } else {
        const openingBracket = openingBracketsStack.pop(bracket);

        if (bracket !== bracketsPairs[openingBracket]){
          return false;
        }
      }
    }

    return openingBracketsStack.length === 0;
};

// Test Cases:
isValid('()'); // true
isValid('()[]{}'); // true
isValid('(]'); // false
isValid('{[()]}'); // true
isValid('}{[({)}]}{'); // false
