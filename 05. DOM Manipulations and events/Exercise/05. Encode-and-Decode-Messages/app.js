





function encodeAndDecodeMessages() {
    //Взимаме си двете textAreas и button
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    //Правим обект от обекти за двете таблици и двата бутона
    const map = {
        encode: {
            text: textAreas[0],
            btn: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) + 1);
            }
        },
        decode: {
            text: textAreas[1],
            btn: buttons[1],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) - 1);
            }
        }
    }

    document.getElementById('main').addEventListener('click', function (event) {
        //Проверяваме дали сме 'click-нали' на <button>
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        const type = event.target.textContent
            .toLowerCase()
            .trim()
            .includes('encode') ? 'encode' : 'decode';

        //Взимам съобщението 
        let messageText = map[type].text.value;
        //и го преобразувам
        messageText = messageText.split('').map(map[type].func).join('');

        //Показваме съобщението
        map.encode.text.value = '';
        map.decode.text.value = messageText;
    })
}