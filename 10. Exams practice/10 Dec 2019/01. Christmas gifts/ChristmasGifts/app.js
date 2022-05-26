function solution() {
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    const [
        listOfGifts,
        sendGifts,
        discardedGifts] = Array.from(document.querySelectorAll('section ul'));

    button.addEventListener('click', addGift);

    function addGift() {
        const giftName = input.value;
        input.value = '';

        const li = giftsConstructor('li', giftName, 'gift');

        const sendBtn = giftsConstructor('button', 'Send', 'sendButton');
        sendBtn.addEventListener('click', () => sendGift(giftName, li));

        const dscrdBtn = giftsConstructor('button', 'Discard', 'discardButton');
        dscrdBtn.addEventListener('click', () => discardGift(giftName, li));

        li.appendChild(sendBtn);
        li.appendChild(dscrdBtn);

        listOfGifts.appendChild(li);
        sortGifts();
    };

    function sendGift(giftName, element) {
        element.remove();
        const newElement = giftsConstructor('li', giftName, 'gift');
        sendGifts.appendChild(newElement);
    }


    function discardGift(giftName, element) {
        element.remove();
        const newElement = giftsConstructor('li', giftName, 'gift');
        discardedGifts.appendChild(newElement);
    }

    function sortGifts() {
        Array.from(listOfGifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => listOfGifts.appendChild(g));
    }

    function giftsConstructor(type, txtContent, className) {
        const el = document.createElement(type);
        el.textContent = txtContent;

        if (className) {
            el.className = className;
        }
        return el;
    }
}