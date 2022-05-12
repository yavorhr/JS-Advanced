function solve(commands) {
    let array = [];
    let number = 1;
    for (i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command == 'add') {
            array.push(number);
        } else {
            array.pop();
        }
        number++;
    }
    console.log(array.length != 0 ? array.join('\n') : 'Empty');
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);


