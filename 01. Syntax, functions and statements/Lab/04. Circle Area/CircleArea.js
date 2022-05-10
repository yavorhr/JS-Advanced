function cirlceArea(arg) {
    let typeOfArg = typeof (arg);
    let result;

    if (typeOfArg === 'number' && !Number.isNaN(arg)) {
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`);
    }
}

cirlceArea(`name`); 
