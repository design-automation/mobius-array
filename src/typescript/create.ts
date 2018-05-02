/**
 * Functions for creating arrays.
 */


/**
 * Creates a new array by making a copy of an existing array.
 *
 * @param array Array to copy.
 * @returns New duplicated array.
 *array
 * <h3>Example:</h3>
 * <code>
 * array = [1,2,3]<br/>
 * copy = Array.Copy(array)</code><br/><br/>
 * Expected value of copy is [1,2,3].
 */
export function copy(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return array.slice();
}

/**
 * Creates a new array of integer numbers between two bounds.
 * Lower bound is inclusive and upper bound is exclusive.
 *
 * @param min Lower bound integer.
 * @param max Upper bound integer.
 * @returns New array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = Array.range(0,5)</code><br/><br/>
 * Expected value of array is [0,1,2,3,4].
 */
export function range(min: number, max: number): number[] {
    if (min === undefined) {throw new Error("Invalid arg: min must be defined.");}
    if (max === undefined) {throw new Error("Invalid arg: max must be defined.");}
    const len:number = max - min;
    if (len <= 0) {return [];}
    return Array.apply(0, new Array(len)).map((v, i) => i + min);
}


// Util
function flattenDeep(array: any[]): any[] {
   return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

/**
 * Flattens an n-dimensional array into a one-dimensional array.
 *
 * @param array Array to flatten.
 * @returns Flattened array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3,[4,5]]<br/>
 * flatten = Array.flatten(array)</code><br/><br/>
 * Expected value of array is [1,2,3,4,5].
 */
export function flatten(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return flattenDeep(array);
}
