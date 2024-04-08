/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1
 *
 * Description:
 * Two players are playing a game of Tower Breakers! Player 1 always moves first,
 * and both players always play optimally.
 *
 * The rules of the game are as follows:
 *
 * - Initially there are n towers.
 * - Each tower is of height m.
 * - The players move in alternating turns.
 * - In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y <= x
 * and y evenly divides x.
 * - If the current player is unable to make a move, they lose the game.
 *
 * Given the values of n and m, determine which player will win.
 * If the first player wins, return 1. Otherwise, return 2.
 */
function towerBreakers(n: number, m: number): number {
    if (m === 1) {
        return 2;
    }

    return (n % 2 === 0) ? 2 : 1;
}

towerBreakers(2, 2); // 2
towerBreakers(1, 4); // 1
