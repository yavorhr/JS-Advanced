function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let elem = array[i];

        if (elem >= result[result.length - 1] || result.length === 0) {
            result.push(elem);
        }
    }
    return result;

}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));

//Solution with reduce() :
function solve(array) {
    let result = [];

    return array.reduce(function (result, currentValue, index, initialArray) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue);
        }
        return result;
    }
        , [])
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
