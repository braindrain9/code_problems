/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-separate-the-numbers/problem
 */

function separateNumbers(s: string): void {
    for (let i = 1; i < s.length; i++) {
        let str = s.slice(0, i);
        let num = +str;

        while (str.length < s.length) {
            num++;
            str += num.toString();
        }
        if (str === s) {
            return console.log(`YES ${ s.slice(0, i) }`);
        }
    }

    return console.log('NO');
}

separateNumbers('1234'); // YES 1
separateNumbers('91011'); // YES 9
separateNumbers('99100'); // YES 99
separateNumbers('101103'); // NO
