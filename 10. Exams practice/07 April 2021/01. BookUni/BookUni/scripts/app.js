function solve() {
    const results = document.querySelector('#results');
    const output = document.querySelectorAll('h1')[1];
    const newBooksShelf = results.children[1].querySelector('div');
    const oldBooksShelft = results.children[0].querySelector('div');
    let totalProfit = 0;

    const inputs = document.querySelectorAll('form>input');
    document.querySelector('form>button').addEventListener('click', addBook);

    function addBook(event) {
        event.preventDefault();

        const bookTitle = inputs[0].value;
        const year = Number(inputs[1].value);
        const price = Number(inputs[2].value);

        if (!bookTitle) {
            return alert("Please enter book title")
        }

        if (year < 0 || price < 0) {
            return alert("Numbers need to be positive!")
        } else if (!year || !price) {
            return alert("Please enter book year and price")
        }

        if (year >= 2000) {
            //div
            const div = document.createElement('div');
            div.classList.add('book');
            //p
            const p = document.createElement('p');
            p.textContent = `${bookTitle} [${year}]`
            //butBtn
            const buyBtn = document.createElement('button');
            buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            buyBtn.addEventListener('click', buyBook)
            //moveBtn
            const moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to old section'
            moveBtn.addEventListener('click', moveBookToOldSection)
            div.appendChild(p);
            div.appendChild(buyBtn);
            div.appendChild(moveBtn);
            newBooksShelf.appendChild(div)

            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';

        } else {
            const div = document.createElement('div');
            div.classList.add('book');
            //p
            const p = document.createElement('p');
            p.textContent = `${bookTitle} [${year}]`
            //butBtn
            const buyBtn = document.createElement('button');
            buyBtn.textContent = `Buy it only for ${(price * 0.85).toFixed(2)} BGN`;
            buyBtn.addEventListener('click', buyBook)
            div.appendChild(p);
            div.appendChild(buyBtn);
            oldBooksShelft.appendChild(div)
        }
    }

    function buyBook(event) {
        const butnTitle = event.target.textContent;
        let regex = '[0-9]+.[0-9]+';
        let price = Number(butnTitle.match(regex));
        totalProfit += price;
        output.textContent = `Total Store Profit: ${totalProfit.toFixed(2)}`
        event.target.parentNode.remove();
    }

    function moveBookToOldSection(event) {
        const div = event.target.parentNode;

        const priceButton = div.querySelector('button');
        const text = priceButton.textContent;
        let regex = '[0-9]+.[0-9]+';

        let price = Number(text.match(regex)) * 0.85;
        priceButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`

        event.target.remove();
        oldBooksShelft.appendChild(div)
    }
}