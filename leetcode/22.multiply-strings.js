/**
 * Link: https://leetcode.com/problems/multiply-strings/
 *
 * Description:
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2,
 * also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Example 1:
 *
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 *
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 */

const multiply = function(num1, num2) {
  /**
   * Here we implement long multiplication algorithm, sometimes called grade-school multiplication,
   * sometimes called the Standard Algorithm:
   *
   * multiply the multiplicand by each digit of the multiplier and then add up all the properly shifted results.
   * It requires memorization of the multiplication table for single digits.
   * @see: https://en.wikipedia.org/wiki/Multiplication_algorithm,
   */

    let productArr = [...Array(num1.length + num2.length)].fill(0);

    /**
    * we are moving right to left, getting product of 2 last digits and saving carry over to current index,
    * and result to index + 1
    */

    for(let i = num1.length - 1; i >= 0; i--) {
      for(let j = num2.length - 1; j >= 0; j--) {
        // get carry over from previous iteration, by default 0
        const prevCarryOver = productArr[i + j + 1];

        // get product of last digits, moving right to left on each iteration
        const product = num1[i] * num2[j] + prevCarryOver;

        productArr[i + j + 1] = product % 10; // mod of product save to index + 1.
        productArr[i + j] += Math.floor(product / 10); // saving carry over
      }
    }

    // as we were saving space for carry over, if first index is 0 we need to remove it.
    if (productArr[0] === 0) {
        productArr.shift();
    }

    return productArr.join('');
};

multiply('2', '3'); // '6'
multiply('123', '456'); // '56088'

