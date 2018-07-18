/**
 * Array functions that modify an input array and return a new array.
 */

/**
 * Adds one item to the end of an array
 * If item is an array, the entire array will be appended as one item.
 *
 * @param arr Array to add to.
 * @param item Item to add.
 * @example arr = [1,2,3]
 * append = Array.append(arr,4)
 *
 * Expected value of arr is [1,2,3,4].
 */
export function append(arr: any[], item: any): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (item === undefined) {throw new Error("Invalid arg: item must be defined.");}
    arr.push(item);
    return;
}

/**
 * Adds one item to the front of an array
 * If the item is an array, the entire array will be appended as one item.
 *
 * @param arr Array to add to.
 * @param item Item to add.
 * @example arr = [1,2,3]
 * append = Array.appendFront(arr,4)
 *
 * Expected value of arr is [4,1,2,3].
 */
export function appendFront(arr: any[], item: any): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (item === undefined) {throw new Error("Invalid arg: item must be defined.");}
    arr.unshift(item);
    return;
}

/**
 * Removes the item at the specified index from an array
 *
 * @param arr Array to remove item from.
 * @param index Zero-based index number of item to remove.
 * @example arr = [1,2,3]
 * remove = Array.removeIndex(arr,1)
 *
 * Expected value of remove is [1,3].
 */
export function removeIndex(arr: any[], index: number): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (index === undefined) {throw new Error("Invalid arg: index must be defined.");}
    arr.splice(index,1);
    return;
}

/**
 * Removes items that match specified value from an array
 * Items must match both the value and type of specified value<br/>
 *
 * Returns original array if no items in array match specified value.
 *
 * @param arr Array to remove item from.
 * @param value Value to search for.
 * @param remove_all Removes all instances of specified value if true, removes only the first instance if
 *      false.
 * @example arr = [1,2,2,3]
 * remove = Array.removeValue(arr,2,true)
 *
 * Expected value of remove is [1,3].
 */
export function removeValue(arr: any[], value: any, remove_all: boolean = true): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            arr.splice(i,1);
            if (remove_all === false) {break;}
        }
    }
    return;
}

/**
 * Replaces items that match specified value from an array with a new value
 * Items must match both the value and type of specified value<br/>
 *
 * Returns original array if no items in array match specified value.
 *
 * @param arr Array to remove item from.
 * @param value Value to search for.
 * @param value2 Value to replace existing value with.
 * @param replace_all Replaces all instances of specified value if true, replaces only the first instance if
 *      false.
 * @example arr = [1,2,2,3]
 * replace = Array.replaceValue(arr,2,9,true)
 *
 * Expected value of replace is [1,9,9,3].
 */
export function replaceValue(arr: any[], value1: any, value2: any, replace_all: boolean = true): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (value1 === undefined) {throw new Error("Invalid arg: value1 must be defined.");}
    if (value2 === undefined) {throw new Error("Invalid arg: value2 must be defined.");}
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] === value1) {
            arr[i] = value2;
            if (replace_all === false) {break;}
        }
    }
    return;
}

/**
 * Reverses the order of items in an array and returns a new array.
 *
 * @param arr Array to reverse.
 * @returns New reversed array.
 * @example arr = [1,2,3]
 * result = Array.reverse(arr)
 *
 * Expected value of result is [3,2,1].
 */
export function reverse(arr: any[]): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    arr.reverse();
    return;
}

/**
 * Sorts an array of strings alphabetically
 * If items are not strings, they are treated as strings.<br/>
 *
 * Items are sorted according to string Unicode code points (character by character, numbers before upper case
 * alphabets, upper case alphabets before lower case alphabets)
 *
 * @param arr Array to sort.
 * @example array = ["1","2","10","Orange","apple"]
 * sort = Array.sortAlpha(array)
 *
 * Expected value of array is ["1","10","2","Orange","apple"].
 */
export function sortAlpha(arr: any[]): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    arr.sort();
    return;
}

/**
 * Sorts an array of numbers in ascending order
 * The array must contain numbers.
 *
 * @param arr Array to add to.
 * @example arr = [56,6,48]
 * sort = Array.sortNum(arr)
 *
 * Expected value of arr is [6,48,56].
 */
export function sortNum(arr: any[]): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    arr.sort((a, b) => a - b);
    return;
}

/**
 * Adds and/or removes items to/from an array
 *
 * If no items_to_add are specified, then items are only removed.
 * If num_to_remove is 0, then items are only added.<br/>
 *
 * @param arr Array to splice
 * @param index Zero-based index at which to add/remove items. (Items are added/removed after specified index)
 * @param num_to_remove Number of items to remove.
 * @param items_to_add Array of items to add.
 * @example arr = [10, 20, 30, 40, 50]
 * result = Array.splice(arr, 1, 3, [2.2, 3.3])
 *
 * Expected value of result is [10, 2.2, 3.2, 50].
 */
export function splice(arr: any[], index: number, num_to_remove: number, items_to_add: any[]): void {
    if (arr === undefined) {throw new Error("Invalid arg: arr must be defined.");}
    if (index === undefined) {throw new Error("Invalid arg: index must be defined.");}
    // const array2 = arr.slice();
    // array2.splice(index, num_to_remove, ...items_to_add);
    // return array2;
    arr.splice(index, num_to_remove, ...items_to_add);
    return;
}
