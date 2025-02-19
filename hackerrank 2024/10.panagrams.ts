/**
 * Link: https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem
 *
 * Description:
 * A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is
 * a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
 *
 */

function pangrams(s: string): string {
    let str = s.toLowerCase().replace(' ', '').split('');
    let wordsSet = new Set();

    for(let i=0; i<str.length; i++) {
        const charCode = str[i].charCodeAt(0);

        if(charCode >= 97 && charCode <= 122) { // a(97) ... z(122)
            wordsSet.add(charCode);
        }
    }

    return(wordsSet.size === 26 ? 'pangram' : 'not pangram');
}

pangrams('We promptly judged antique ivory buckles for the next prize'); // pangram
pangrams('We promptly judged antique ivory buckles for the prize'); // not pangram
