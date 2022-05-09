function solve(num, param1, param2, param3, param4, param5) {
    let number = Number(num);

    const arr = [param1, param2, param3, param4, param5];

    for (i = 0; i < arr.length; i++) {
        let command = (arr[i]);

        switch (command) {
            case 'chop':
                console.log(number /= 2);
                break;
            case 'dice':
                console.log(number = Math.sqrt(number));
                break;
            case 'spice':
                console.log(number += 1);
                break;
            case 'bake':
                console.log(number *= 3);
                break;
            case 'fillet':
                console.log((number *= 0.8).toFixed(1));
                break;
        }
    }
}

console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));
