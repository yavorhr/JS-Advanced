function addItem() {

    const li = document.createElement('li');
    const inputElem = document.getElementById('newText');
    const inputValue = inputElem.value;
    li.textContent = inputValue;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.style.fontWeight = 'bold';
    li.appendChild(deleteBtn);
    
    document.getElementById('items').appendChild(li);

    inputElem.value = '';

    document.getElementById('items').addEventListener('click', (event) => {
        event.target.parentNode.remove();

    })

}

