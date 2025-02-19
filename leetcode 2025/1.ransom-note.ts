/**
 * Link: https://leetcode.com/problems/ransom-note/description
 *
 * Description:
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters
 * from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Examples:
 * Example 1:
 *
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Example 2:
 *
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Example 3:
 *
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
    // Case 1: Complexity O(n^2)
    // const ransomArr = ransomNote.split('');
    // const magazineArr = magazine.split('');
    //
    // for(let i = 0; i < ransomArr.length; i++) { // O(n)
    //     const index : number = magazineArr.indexOf(ransomArr[i]); // O(m)
    //
    //     if (index !== -1) {
    //         magazineArr.splice(index, 1); // O(m)
    //     } else {
    //         return false;
    //     }
    // }
    //
    // return true;

    // Case 2: O(N * M)
    for (const letter of magazine) { // O(n)
        ransomNote = ransomNote.replace(letter, ""); // O(m)
    }

    return !ransomNote;
};

canConstruct("a", "b"); // return false
canConstruct("aa", "ab"); // return false
canConstruct("aa", "aab"); // return false
