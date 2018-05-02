/**
 * Functions for reodering arrays.
 */


/**
 * Reverses the order of items in an array.
 *
 * @param array Array to reverse.
 * @returns New reversed array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * result = Array.reverse(array)</code><br/><br/>
 * Expected value of result is [3,2,1].
 */
export function reverse(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    const array2 = array.slice();
    array2.reverse();
    return array2;
}

/**
 * Sorts an array of strings alphabetically.
 * If items are not strings, they are treated as strings.<br/>
 *
 * Items are sorted according to string Unicode code points (character by character, numbers before upper case
 * alphabets, upper case alphabets before lower case alphabets)
 *
 * @param array Array to sort.
 * @returns New sorted array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = ["1","2","10","Orange","apple"]<br/>
 * sort = Array.sortAlpha(array)</code><br/><br/>
 * Expected value of array is ["1","10","2","Orange","apple"].
 */
export function sortAlpha(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    const array2 = array.slice();
    array2.sort();
    return array2;
}

/**
 * Sorts an array of numbers in ascending order.
 * The array must contain numbers.
 *
 * @param array Array to add to.
 * @returns New sorted array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [56,6,48]<br/>
 * sort = Array.sortNum(array)</code><br/><br/>
 * Expected value of array is [6,48,56].
 */
export function sortNum(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    const array2 = array.slice();
    array2.sort((a, b) => a - b);
    return array2;
}
