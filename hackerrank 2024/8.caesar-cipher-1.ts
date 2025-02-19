/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem
 *
 * Description:
 * Julius Caesar protected his confidential information by encrypting it using a cipher.
 * Caesar's cipher shifts each letter by a number of letters.
 * If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
 * In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 *
 * Explanation:
 * Original alphabet:      abcdefghijklmnopqrstuvwxyz
 * Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab
 *
 * m -> o
 * i -> k
 * d -> f
 * d -> f
 * l -> n
 * e -> g
 * -    -
 * O -> Q
 * u -> w
 * t -> v
 * z -> b
 */

function caesarCipher(s: string, k: number): string {
    const resultStr = s.split('');
    const validCodesBig : number[] = [
        ...Array.from({length: 90-64}).map((v, i) => 65 + i), // A (65) ... Z (90)
    ];
    // skip 91 - 96 chars
    const validCodesSmall : number[] = [
        ...Array.from({length: 122-96}).map((v, i) => 97 + i), // a (97)... z (122)
    ];

    for(let i = 0; i < resultStr.length; i++) {
        const code = resultStr[i].charCodeAt(0);

        let validCodes : number[] = [];

        if (validCodesBig.indexOf(code) !== -1) {
            validCodes = [...validCodesBig];
        } else if (validCodesSmall.indexOf(code) !== -1) {
            validCodes = [...validCodesSmall];
        }

        const codeIndex = validCodes.indexOf(code);

        if (codeIndex !== -1) {
            let newCodeIndex = codeIndex + k;

            // if code index
            if (newCodeIndex > validCodes.length) {
                newCodeIndex = newCodeIndex - validCodes.length
            }

            resultStr[i] = String.fromCharCode(validCodes[newCodeIndex]);
        }
    }

    return resultStr.join('');
}

caesarCipher('middle-Outz', 2); // okffng-Qwvb
caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5); // Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
