/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-strong-password/problem
 */

function minimumNumber(n: number, password: string): number {
    const numbers = '0123456789';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()-+';
    const minLength = 6;

    let noNumber = 1;
    let noLowercase = 1;
    let noUpperCase = 1;
    let noSpecialCharacters = 1;

    for (let char of password) {
        if (numbers.includes(char)) {
            noNumber = 0;
        }

        if (lowerCase.includes(char)) {
            noLowercase = 0;
        }

        if (upperCase.includes(char)) {
            noUpperCase = 0;
        }

        if (specialCharacters.includes(char)) {
            noSpecialCharacters = 0;
        }
    }

    const missingCharacters = noNumber + noLowercase + noUpperCase + noSpecialCharacters;
    const missingLength = minLength - n;

    return Math.max(missingCharacters, missingLength);
}

minimumNumber(3, 'Ab1'); // 3
minimumNumber(11, '#HackerRank'); // 1

