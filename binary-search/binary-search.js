'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let head = 0
	let tail = array.length - 1
	let midpoint = Math.floor((tail + head) / 2)

	while (tail >= head) {
		if (array[midpoint] === target) {
			return true
		} else if (array[midpoint] > target) {
			tail = midpoint - 1
			midpoint = Math.floor((tail + head) / 2)
		} else {
			head = midpoint + 1
			midpoint = Math.floor((tail + head) / 2)
		}
	}

	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
