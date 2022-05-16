function focused() {

    //select all input fields
    //add eventListeners (for focus and blur events) for all input fields
    Array.from(document.getElementsByTagName('input')).forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

    //onFocus -> select input parent -> apply class "focused";
    //event = input полето, откъдето event.parentNode = <div>; 
    function onFocus(event) {
        event.target.className = 'focused'
    }

    //onBlur -> select input parent -> remove class "focused";
    function onBlur(event) {
        console.log (event.target.parentNode);
        event.target.parentNode.blur();
    }
}
