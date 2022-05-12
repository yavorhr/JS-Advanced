function solve(array) {
    array.sort((a, b) => a.localeCompare(b)).forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
