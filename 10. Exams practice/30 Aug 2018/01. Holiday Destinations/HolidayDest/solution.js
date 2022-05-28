function addDestination() {

    const input = document.getElementById('input');
    const cityName = input.querySelectorAll('.inputData')[0];
    const countryName = input.querySelectorAll('.inputData')[1];
    const season = document.getElementById('seasons');
    const table = document.getElementById('destinationsList');

    if (cityName.value == '' || countryName.value == '') {
        return alert('All fields are required!')
    }

    const tr = document.createElement('tr');
    const th = document.createElement('td');
    th.textContent = `${cityName.value}, ${countryName.value}`

    const th2 = document.createElement('td');
    const seasonCapitalLetter = season.value[0].toUpperCase() + season.value.slice(1);
    th2.textContent = seasonCapitalLetter;

    tr.appendChild(th);
    tr.appendChild(th2)
    table.appendChild(tr);

    Array.from(document.querySelectorAll('.summary')).forEach(input => {
        if (input.id == season.value.toLowerCase()) {
            input.value++;
        }
    });

    cityName.value = '';
    countryName.value = '';
    season.value = '';

}

