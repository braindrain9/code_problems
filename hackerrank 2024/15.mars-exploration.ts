/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem
 */

function marsExploration(s: string): number {
    let str = s.split('');
    let pattern = 'SOS';
    let lettersChanged = 0;

    for(let i = 0; i < str.length; i++) {
        let patternIndex = i % 3;

        if (str[i] !== pattern[patternIndex]) {
            lettersChanged++;
        }
    }

    return lettersChanged;
}

marsExploration('SOSSPSSQSSOR'); // 3
marsExploration('SOSSOT'); // 1
