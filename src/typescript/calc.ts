/**
 * Array functions that obtain and return information from an input array. Does not modify input array.
 */

// /**
//  * Returns the number of items in an array.
//  *
//  * @param array Array.
//  * @returns Length of the array.
//  * @example array = [1,2,3]
//  * len = Array.len(array)
//  *
//  * Expected value of len is 3.
//  */
// export function len(array: any[]): number {
//     if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
//     return array.length;
// }

/**
 * Searches for a value in an array and returns the index position if found.
 * Items must match both the value and type of specified value<br/>
 *
 * Returns -1 if no items in array match specified value.
 *
 * @param array Array.
 * @param value Value to search for.
 * @param search_all Returns index position for all instances of specified value if true, returns only the first
 *      instance if false.
 * @returns Index position or array of index positions containing specified value.
 * @example array = [6,2,2,7]
 * positions = Array.indexOf(array,2,true)
 *
 * Expected value of positions is [1,2].
 */
export function indexOf(array: any[], value: any, search_all: boolean = true): number|number[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    const positions = [];
    for (let i = 0 ; i < array.length; i++) {
        if (array[i] === value) {
            positions.push(i);
            if (search_all === false) {
                return i;
            }
        }
    }
    if (positions.length > 0) {
        return positions;
    } else {
        return -1;
    }
}

/**
 * Searches for a value in an array and returns true if found.
 * Items must match both the value and type of specified value<br/>
 *
 * Returns false if no items in array match specified value.
 *
 * @param array Array.
 * @param value Value to search for.
 * @returns Returns true if value can be foung in array, false if value cannot be found.
 * @example array = [6,2,2,7]
 * exists = Array.includes(array,2)
 *
 * Expected value of exists is true.
 */
export function includes(array: any[], value: any): boolean {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

/**
 * Sums up all the values in an array.
 *
 * @param array Array of numbers.
 * @returns Number
 * @example array = [1,2,3]
 * sum = Array.massAdd(array)
 *
 * Expected value of sum is 6.
 */
export function massAdd(array: number[]): number {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return array.reduce((total,next) => total + next);
}
