function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    return result;
}

consoloe.log(lastKNumbersSequence(8, 2));

