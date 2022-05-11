function solve(pieFlavours, startFlavor, endFlavor) {
    let startIndex = pieFlavours.indexOf(startFlavor);
    let endIndex = pieFlavours.indexOf(endFlavor);
    return pieFlavours.slice(startIndex, endIndex + 1);
}

console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));
