function subSum(arr, start, end) {
    //If the start index is less than zero, consider its value to be a zero
    if (start < 0) {
        start = 0;
    }
    //If the first element is not an array, return NaN
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    //If the end index is outside the bounds of the array, assume it points to the last index of the array
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    return arr.slice(start, end + 1).reduce((sum, arrElement) => sum + Number(arrElement), 0);
}

console.log('Case 1');
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log('Case 2');
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log('Case 3');
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log('Case 4');
console.log(subSum([], 1, 2));
console.log('Case 5');
console.log(subSum('text', 0, 2));
