/**
 * Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

function birthdayCakeCandles(candles: number[]): number {
    const max = Math.max(...candles);

    return candles.filter(candle => candle === max).length;
}

birthdayCakeCandles([4, 4, 1, 3]); // 2
birthdayCakeCandles([3, 2, 1, 3]); // 2
