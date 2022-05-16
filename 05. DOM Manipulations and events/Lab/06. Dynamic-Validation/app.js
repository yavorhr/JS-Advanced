function validate() {
    //select input field and add change event listener
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        //onChange -> validate input
        const email = event.target.value;
        if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
            //if valid -> remove class "error";
            event.target.className = '';
        } else {
            //else -> add class "error";
            event.target.className = 'error';
        }
    }
}