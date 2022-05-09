function solve(speed, area) {
    let speedAreaLimit;
    let speedDifference = 0;

    switch (area) {
        case "motorway":
            speedAreaLimit = 130;
            break;
        case "interstate":
            speedAreaLimit = 90;
            break;
        case "city":
            speedAreaLimit = 50;
            break;
        case "residential":
            speedAreaLimit = 20;
    }

    let speedTypePrint;
    speedDifference = speed - speedAreaLimit;

    if (speedDifference <= 0) {
        return `Driving ${speed} km/h in a ${speedAreaLimit} zone`;
    } else if (speedDifference <= 20) {
        speedTypePrint = 'speeding';
    } else if (speedDifference <= 40) {
        speedTypePrint = 'excessive speeding';
    } else {
        speedTypePrint = 'reckless driving';
    }

    return `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedAreaLimit} - ${speedTypePrint}`
}

console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));
