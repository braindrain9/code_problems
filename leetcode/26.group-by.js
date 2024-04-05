/**
 * Link: https://leetcode.com/problems/group-by
 *
 * Description:
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on
 * any array and it will return a grouped version of the array.
 *
 * A grouped array is an object where each groupKey is the output of fn(arr[i]) and each value is an array
 * containing all items in the original array with that groupKey.
 *
 * The provided callback fn will accept an item in the array and return a string groupKey.
 *
 * The order of each value list should be the order the items appear in the array. Any order of groupKeys is acceptable.
 *
 * Please solve it without lodash's _.groupBy function.
 *
 * Example 1:
 *
 * Input:
 * array = [
 *   {"id":"1"},
 *   {"id":"1"},
 *   {"id":"2"}
 * ],
 * fn = function (item) {
 *   return item.id;
 * }
 * Output:
 * {
 *   "1": [{"id": "1"}, {"id": "1"}],
 *   "2": [{"id": "2"}]
 * }
 */

Array.prototype.groupBy = function(fn) {
    const groups = {};
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
        const groupKey = fn(arr[i])

        if (!(groupKey in groups)) {
            groups[groupKey] = [];
        }

        groups[groupKey].push(arr[i]);
    }

    return groups;
};

[1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
[[1,2,3],[1,3,5],[1,5,9]].groupBy(function (list) { return String(list[0]); }) // {"1":[[1,2,3],[1,3,5],[1,5,9]]}
[1,2,3,4,5,6,7,8,9,10].groupBy(function (n) { return String(n > 5); }) // {"false":[1,2,3,4,5],"true":[6,7,8,9,10]}
[{"id":"1"},{"id":"1"},{"id":"2"}].groupBy(function (item) { return item.id; }) // {"1":[{"id":"1"},{"id":"1"}],"2":[{"id":"2"}]}
