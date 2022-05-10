function stringthLength(param1, param2, param3) {
    let sum = param1.length + param2.length + param3.length;
    console.log(sum);
    let average = sum / 3;
    console.log(Math.floor(average));
}

stringthLength('chocolate', 'ice cream', 'cake');
