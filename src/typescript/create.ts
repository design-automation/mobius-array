
/**
 * Creates a new array by making a copy of an existing array.
 *
 * @param arr Array to copy.
 * @returns New duplicated array.
 * @example arr = [1,2,3]
 * copy = Array.Copy(arr)
 *
 * Expected value of copy is [1,2,3].
 */
export function byCopy(arr: any[]): any[] {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    return arr.slice();
}

/**
 * Combines two arrays into a new array.
 *
 * @param arr1 First array.
 * @param arr2 Second array.
 * @returns Combined array (array1 first, followed by array2).
 * @example arr1 = [1,2,3]
 * arr2 = [9,0]
 * newarr = Array.concat(arr1,arr2)
 *
 * Expected value of newarr is [1,2,3,9,0].
 */
export function byConcat(arr1: any[], arr2: any[]): any[] {
    if (arr1 === undefined) {throw new Error("Invalid arg: arr1 must be defined.");}
    if (arr2 === undefined) {throw new Error("Invalid arg: arr2 must be defined.");}
    return arr1.concat(arr2);
}

/**
 * Flattens an n-dimensional array into a one-dimensional array.
 *
 * @param arr Array to flatten.
 * @returns Flattened array.
 * @example arr = [1,2,3,[4,5]]
 * flatten = Array.flatten(arr)</code>
 *
 * Expected value of flatten is [1,2,3,4,5].
 */
export function byFlatten(arr: any[]): any[] {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    return flattenDeep(arr);
}

/**
 * Creates a copy of a portion of an array, from start index to end index (end not included).
 *
 * @param arr Array to slice.
 * @param start Zero-based index at which to begin slicing.
 *      A negative index can be used, indicating an offset from the end of the sequence.
 *      If start is undefined, slice begins from index 0.
 * @param end Zero-based index before which to end slicing. Slice extracts up to but not including end.
 *      A negative index can be used, indicating an offset from the end of the sequence.
 *      If end is undefined, slice extracts through the end of the sequence.
 * @returns A new arr.
 * @example arr = [1,2,3,4,5]
 * result = Array.slice(arr,1,3)
 *
 * Expected value of result is [2,3].
 */
export function bySlice(arr: any[], start: number, end: number): any[] {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (start === undefined) {throw new Error("Invalid arg: start must be defined.");}
    if (end === undefined) {throw new Error("Invalid arg: end must be defined.");}
    return arr.slice(start,end);
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
    const len: number = max - min;
    if (len <= 0) {return [];}
    return Array.apply(0, new Array(len)).map((v, i) => i + min);
}

/**
 * Util functions.
 */
//

function flattenDeep(arr: any[]): any[] {
   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
