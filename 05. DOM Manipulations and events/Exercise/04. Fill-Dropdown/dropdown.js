function addItem() {

    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value + " " + value.value;
    option.setAttribute('value', option.textContent);
    document.getElementById('menu').appendChild(option);
}