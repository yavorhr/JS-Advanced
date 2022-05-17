// function lockedProfile() {
//     //закачаме eventListener на целия 'main'
//     document.getElementById('main').addEventListener('click', (event) => {
//         //Проверяваме дали профилът ни е lock :
//         if (event.target.tagName === 'BUTTON') {
//             const profile = event.target.parentNode;
//             //Дай ми parent-а на <button>, намери ми този :checked input
//             //, чията стойност = lock, и я сравни със 'locked'

//             const isLocked =
//                 profile.querySelector('input[type=radio]:checked').value === 'lock';

//             if (isLocked) {
//                 return;
//             }

//             let div = profile.querySelector('div');
//             let isVisible = div.style.display === 'block';
//             div.style.display = isVisible ? 'none' : 'block';
//             event.target.textContent = !isVisible ? 'Hide it' : 'Show more';
//         }
//     })
// }



function lockedProfile() {
    document.getElementById('main').addEventListener('click', (event) => {
        if (event.target.tagName == 'BUTTON') {
            const divDetails = event.target.parentNode;

            const isLocked = divDetails.querySelector('input[type="radio"]:checked').value == 'lock';

            if (isLocked) {
                return
            }

            const hiddenInfo = divDetails.querySelector('div');
            hiddenInfo.style.display = hiddenInfo.style.display === 'none' ? 'block' : 'none';
            event.target.textContent =  event.target.textContent === 'Show more' ? ''




        }
    })

}