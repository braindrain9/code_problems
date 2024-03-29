/**
 * Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Description:
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations
 * that the number could represent. Return the answer in any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 */
const letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }

    const result = [];

    function backtrack (index = 0, combination = '') {
        if (index === digits.length) {
            result.push(combination);

            return;
        }

        for (const letter of letters[digits[index]]) {
            backtrack(index + 1, combination + letter);
        }
    }

    backtrack();

    return result;
}

letterCombinations('23'); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
letterCombinations(''); // []
letterCombinations('2'); // ["a","b","c"]
