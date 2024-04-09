/**
 * Link: https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem
 */

function gradingStudents(grades: number[]): number[] {
    let newGrades : number[] = [];

    for(let i = 0; i < grades.length; i++) {
        let roundDiff = 5 - grades[i] % 5;

        // failing grade should go first
        if (grades[i] < 38) {
            newGrades.push(grades[i]);
        } else if (roundDiff >= 3) {
            newGrades.push(grades[i]);
        } else {
            newGrades.push(grades[i] + roundDiff);
        }
    }

    return newGrades;
}

gradingStudents([73, 67, 38, 33]); // [75, 67, 40, 33]
