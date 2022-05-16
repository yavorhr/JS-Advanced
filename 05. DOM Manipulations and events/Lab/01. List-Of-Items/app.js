function addItem() {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', (event) => {
        console.log(event.target);
    })

    const inputElem = document.getElementById('newItemText');
    const inputValue = inputElem.value;

    li.textContent = inputValue;

    document.getElementById('items').appendChild(li);
    inputValue.value = '';
}

addItem();