// sitting
/**
 * Have the function SeatingStudents(noOfDesks, arrOccupiedDesks) read the input arguments where noOfDesks represents the number of desks in a classroom, and the argument occupiedDesks, will be a sorted array of the desks that are already occupied.
 *
 * All of the desks will be arranged in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc.
 *
 * Your program should return the number of ways 2 students can be seated next to each other. This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student. Desks 1,3 are adjacent but 2,3 are not adjacent.
 *
 * Testcase 1:
 * Input: 12, [2, 6, 7, 11]
 * Output: 6
 *
 * Explanation:
 * Seating arrangement picture.
 * https://i.imgur.com/rvP5cjj.jpeg
 *     1  2
 *     3  4
 *     5  6
 *     7  8
 *     9  10
 *     11 12
 *     
 * The possible adjacent arrangements from the above picture are
 * - 1,3
 * - 3,4
 * - 3,5
 * - 8,10
 * - 9,10
 * - 10,12
 * Hence the answer 6.
 */
exports.SeatingStudents = function (noOfDesks, occupiedDesks) {
    console.log('test');
    let EmptyDeskArray = [];
    let sittingArrange = [];
    let possiblePositions = [];
    for (let i = 1; i <= noOfDesks; i++) {
        if (occupiedDesks.indexOf(i) == -1) {
            EmptyDeskArray.push(i);
        }
        let column1, column2 = 0;
        i % 2 != 0 ? column1 = i : i % 2 == 0 ? column2 = i : null;
        if (i % 2 != 0) {
            sittingArrange.push([column1, column1 + 1])
            sittingArrange.push([column1, column1 + 2])
        }
        if (i % 2 == 0) {
            if (column2 < noOfDesks) {
                sittingArrange.push([column2, column2 + 2])
            }
        }
        possiblePositions = sittingArrange.filter(pair => !occupiedDesks.includes(pair[0]) && !occupiedDesks.includes(pair[1]));


    }
    



    return { possiblePositions };
};

console.log(this.SeatingStudents(5, [2, 6, 7, 11]));
// console.log(this.SeatingStudents(12, [2, 3, 6, 7, 10, 11]));
