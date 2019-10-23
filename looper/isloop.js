'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    const values = new Set()
    let current = linkedlist.head
    // let truthy = false

    while (current.next !== null) {
        if (values.has(current)) {
            // truthy = true
            return true
        } else {
            values.add(current)
        }

        current = current.next
    }

    return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop