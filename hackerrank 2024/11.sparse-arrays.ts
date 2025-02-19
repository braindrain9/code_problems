/**
 * Link: https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem
 *
 * Description:
 * There is a collection of input strings and a collection of query strings. For each query string,
 * determine how many times it occurs in the list of input strings. Return an array of the results.
 *
 */

function matchingStrings(strings: string[], queries: string[]): number[] {
    const result : number[] = [];

    queries.forEach(q => {
        const arr = strings.filter(str => str === q);

        result.push(arr.length);
    });

    return result;
}

matchingStrings([ 'aba', 'baba', 'aba', 'xzxb' ], [ 'aba', 'xzxb', 'ab' ]); // [ 2, 1, 0 ]
matchingStrings([ 'def', 'de', 'fgh' ],[ 'de', 'lmn', 'fgh' ]); // [ 1, 0, 1 ]
matchingStrings([
  'abcde', 'sdaklfj',
  'asdjf', 'na',
  'basdn', 'sdaklfj',
  'asdjf', 'na',
  'asdjf', 'na',
  'basdn', 'sdaklfj',
  'asdjf'
], [ 'abcde', 'sdaklfj', 'asdjf', 'na', 'basdn' ]); // [ 1, 3, 4, 3, 2 ]

