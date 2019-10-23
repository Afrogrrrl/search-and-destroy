'use strict';

// Complete this algo
const minJumps = arr => {
    let currentIndex = 0, numJumps = 0
    let jumpIndex

    while (currentIndex < arr.length) {
        let largestJump = arr[currentIndex]

        if (currentIndex + largestJump >= arr.length) {
            return numJumps + 1
        }

        for (let i = currentIndex + 1; i < currentIndex + largestJump; i++) {
            // consol
            if (arr[i] > largestJump) {
                largestJump = arr[i]
                jumpIndex = i
            } else {
                jumpIndex = currentIndex + largestJump
            }
        }

        currentIndex = jumpIndex
        console.log(arr[currentIndex])
        numJumps++

        // while (largestJump > 0) {
        //     if (arr[index + numJumps] > largestJump) {
        //         largestJump = arr[index + numJumps]
        //         newIndex = index + numJumps
        //         numJumps++
        //     }
        // }

        // index++

    }

    return numJumps
};

module.exports = minJumps