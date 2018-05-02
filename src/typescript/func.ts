/**
 * General array functions.
 */


/**
 * Returns the number of items in an array.
 *
 * @param array Array.
 * @returns Length of the array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * len = Array.len(array)</code><br/><br/>
 * Expected value of len is 3.
 */
export function len(array: any[]): number {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return array.length;
}

/**
 * Adds an item to the end of an array.
 * If item is an array, the entire array will be appended as one item.
 *
 * @param array Array to add to.
 * @param item Item to add.
 * @returns New array with added item.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * append = Array.append(array,4)</code><br/><br/>
 * Expected value of array is [1,2,3,4].
 */
export function append(array: any[], item: any): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (item === undefined) {throw new Error("Invalid arg: item must be defined.");}
    const array2 = array.slice();
    array2.push(item);
    return array2;
}

/**
 * Adds an item to the front of an array.
 * If the item is an array, the entire array will be appended as one item.
 *
 * @param array Array to add to.
 * @param item Item to add.
 * @returns New array with added item.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * append = Array.appendFront(array,4)</code><br/><br/>
 * Expected value of array is [4,1,2,3].
 */
export function appendFront(array: any[], item: any): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (item === undefined) {throw new Error("Invalid arg: item must be defined.");}
    const array2 = array.slice();
    array2.unshift(item);
    return array2;
}

/**
 * Adds items (from an array) to the end of an array.
 * Items are added to array individually as seperate items.
 *
 * @param array Array to add to.
 * @param items Array of items to add.
 * @returns Array with added items.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * array2 = [9,0]<br/>
 * extend = Array.extend(array,array2)</code><br/><br/>
 * Expected value of extend is [1,2,3,9,0].
 */
export function extend(array: any[], items: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (items === undefined) {throw new Error("Invalid arg: items must be defined.");}
    return array.concat(items);
}

/**
 * Adds items (from an array) to the front of an array.
 * Items are added to array individually as seperate items.
 *
 * @param array Array to add to.
 * @param items Array of items to add.
 * @returns Array with added items.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * array2 = [9,0]<br/>
 * extend = Array.extend(array,array2)</code><br/><br/>
 * Expected value of extend is [9,0,1,2,3].
 */
export function extendFront(array: any[], items: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (items === undefined) {throw new Error("Invalid arg: items must be defined.");}
    return items.concat(array);
}

/**
 * Removes the item at the specified index from an array.
 *
 * @param array Array to remove item from.
 * @param index Zero-based index number of item to remove.
 * @returns Array with item removed.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * remove = Array.removeIndex(array,1)</code><br/><br/>
 * Expected value of array is [1,3].
 */
export function removeIndex(array: any[], index: number): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (index === undefined) {throw new Error("Invalid arg: index must be defined.");}
    const array2 = array.slice();
    array2.splice(index,1);
    return array2;
}

/**
 * Removes items that match specified value from an array.
 * Items must match both the value and type of specified value<br/>
 *
 * Returns original array if no items in array match specified value.
 *
 * @param array Array to remove item from.
 * @param value Value to search for.
 * @param remove_all Removes all instances of specified value if true, removes only the first instance if
 *      false.
 * @returns Array with item removed
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,2,3]<br/>
 * remove = Array.removeValue(array,2,true)</code><br/><br/>
 * Expected value of array is [1,3].
 */
export function removeValue(array: any[], value: any, remove_all: boolean = true): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    const array2 = array.slice();
    for (let i = array2.length - 1; i >= 0; i--) {
        if (array2[i] === value) {
            array2.splice(i,1);
            if (remove_all === false) {break;}
        }
    }
    return array2;
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
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3,4,5]<br/>
 * result = Array.slice(array,1,3)</code><br/><br/>
 * Expected value of result is [2,3].
 */
export function slice(array: any[], start: number, end: number): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (start === undefined) {throw new Error("Invalid arg: start must be defined.");}
    if (end === undefined) {throw new Error("Invalid arg: end must be defined.");}
    const array2 = array.slice();
    return array2.slice(start,end);
}

/**
 * Adds and/or removes items to/from an array.
 *
 * If no items_to_add are specified, then items are only removed.
 * If num_to_remove is 0, then items are only added.<br/>
 *
 * @param array Array to splice
 * @param index Zero-based index at which to add/remove items. (Items are added/removed after specified index)
 * @param num_to_remove Number of items to remove.
 * @param items_to_add Array of items to add.
 * @returns A new array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [10, 20, 30, 40, 50]<br/>
 * result = Array.splice(array, 1, 3, [2.2, 3.3])</code><br/><br/>
 * Expected value of result is [10, 2.2, 3.2, 50].
 */
export function splice(array: any[], index: number, num_to_remove: number, items_to_add: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (index === undefined) {throw new Error("Invalid arg: index must be defined.");}
    const array2 = array.slice();
    array2.splice(index, num_to_remove, ...items_to_add);
    return array2;
}
