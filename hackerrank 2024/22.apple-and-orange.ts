/**
 * Link: https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    const countFruit = (tree : number, fruits : number[]) => {
        let fruitCount = 0;

        for (let i = 0; i <= fruits.length; i++) {
            let distance = tree + fruits[i];

            if (distance >= s && distance <= t) {
                fruitCount++;
            }
        }

        return fruitCount;
    };

  console.log(countFruit(a, apples));
  console.log(countFruit(b, oranges));
}

countApplesAndOranges(7, 11, 5,  15, [ -2, 2, 1 ], [ 5, -6 ]);
// 1
// 1
