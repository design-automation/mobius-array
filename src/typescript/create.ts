
/**
 * Creates a new array by making a copy of an existing array.
 *
 * @param array Array to copy.
 * @returns New duplicated array.
 * @example array = [1,2,3]
 * copy = Array.Copy(array)
 *
 * Expected value of copy is [1,2,3].
 */
export function byCopy(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return array.slice();
}

/**
 * Combines two arrays into a new array.
 *
 * @param array1 First array.
 * @param array2 Second array.
 * @returns Combined array (array1 first, followed by array2).
 * @example array1 = [1,2,3]
 * array2 = [9,0]
 * newarr = Array.concat(array1,array2)
 *
 * Expected value of newarr is [1,2,3,9,0].
 */
export function byConcat(array1: any[], array2: any[]): any[] {
    if (array1 === undefined) {throw new Error("Invalid arg: array1 must be defined.");}
    if (array2 === undefined) {throw new Error("Invalid arg: array2 must be defined.");}
    return array1.concat(array2);
}

/**
 * Flattens an n-dimensional array into a one-dimensional array.
 *
 * @param array Array to flatten.
 * @returns Flattened array.
 * @example array = [1,2,3,[4,5]]
 * flatten = Array.flatten(array)</code>
 *
 * Expected value of array is [1,2,3,4,5].
 */
export function byFlatten(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return flattenDeep(array);
}

/**
 * Creates a copy of a portion of an array, from start index to end index (end not included).
 *
 * @param array Array to slice.
 * @param start Zero-based index at which to begin slicing.
 *      A negative index can be used, indicating an offset from the end of the sequence.
 *      If start is undefined, slice begins from index 0.
 * @param end Zero-based index before which to end slicing. Slice extracts up to but not including end.
 *      A negative index can be used, indicating an offset from the end of the sequence.
 *      If end is undefined, slice extracts through the end of the sequence.
 * @returns A new array.
 * @example array = [1,2,3,4,5]
 * result = Array.slice(array,1,3)
 *
 * Expected value of result is [2,3].
 */
export function bySlice(array: any[], start: number, end: number): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (start === undefined) {throw new Error("Invalid arg: start must be defined.");}
    if (end === undefined) {throw new Error("Invalid arg: end must be defined.");}
    const array2 = array.slice();
    return array2.slice(start,end);
}

/**
 * Creates a new array of integer numbers between two bounds.
 * Lower bound is inclusive and upper bound is exclusive.
 *
 * @param min Lower bound integer.
 * @param max Upper bound integer.
 * @returns New array.
 * @example array = Array.range(0,5)
 *
 * Expected value of array is [0,1,2,3,4].
 */
export function byRange(min: number, max: number): number[] {
    if (min === undefined) {throw new Error("Invalid arg: min must be defined.");}
    if (max === undefined) {throw new Error("Invalid arg: max must be defined.");}
    const len:number = max - min;
    if (len <= 0) {return [];}
    return Array.apply(0, new Array(len)).map((v, i) => i + min);
}

/**
 * Util functions.
 */
//

function flattenDeep(array: any[]): any[] {
   return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
