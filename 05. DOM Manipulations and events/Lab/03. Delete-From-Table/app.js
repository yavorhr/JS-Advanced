function deleteByEmail() {
    const emailElem = document.querySelector('input[name="email"]');
    const email = emailElem.value;

    const rows = [...document.querySelectorAll('table tbody tr')];

    document.querySelectorAll('table tbody tr');

    for (let row of rows) {
        const mail = row.children[1];
        if (mail.textContent === email) {
            mail.parentNode.remove();
            document.getElementById('result').textContent = 'Deleted';
        } else {
            document.getElementById('result').textContent = 'Not Found';
        }
    }




    emailElem.value = '';
}

