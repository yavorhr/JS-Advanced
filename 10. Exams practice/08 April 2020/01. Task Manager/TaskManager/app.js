function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const [add, open, progress, complete] = document.querySelectorAll('section');

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        if (!task.value || !description.value || !date.value) {
            return alert("Eneter all required fields!")
        }

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = task.value;

        const pDescr = document.createElement('p');
        pDescr.textContent = `Description: ${description.value}`

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date.value}`

        const div = document.createElement('div');
        div.classList.add('flex');

        const greenBtn = document.createElement('button');
        greenBtn.className = 'green';
        greenBtn.textContent = "Start";
        greenBtn.addEventListener('click', movetoProgress)

        const redBtn = document.createElement('button');
        redBtn.className = 'red';
        redBtn.textContent = "Delete";
        redBtn.addEventListener('click', deleteTask)

        div.appendChild(greenBtn);
        div.appendChild(redBtn);

        article.appendChild(h3);
        article.appendChild(pDescr);
        article.appendChild(pDate);
        article.appendChild(div);

        open.querySelectorAll('div')[1].appendChild(article);
        task.value = '';
        description.value = '';
        date.value = '';
    }

    function deleteTask(event) {
        event.target.parentNode.parentNode.remove();
    }

    function movetoProgress(event) {
        const article = event.target.parentNode.parentNode;

        const firstBtn = article.querySelectorAll('button')[0];
        const secondBtn = article.querySelectorAll('button')[1];

        firstBtn.className = "red";
        firstBtn.textContent = "Delete"
        firstBtn.addEventListener('click', (event) => {
            const article = event.target.parentNode.parentNode;
            article.remove();
        })

        secondBtn.className = "orange";
        secondBtn.textContent = "Finish"
        secondBtn.addEventListener('click', (event) => {
            const divClassFlex = event.target.parentNode;
            const redBtn = divClassFlex.querySelector('.red');
            const orangeBtn = divClassFlex.querySelector('.orange');
            redBtn.remove();
            orangeBtn.remove();

            complete.children[1].appendChild(article);
        });

        progress.querySelectorAll('div')[1].appendChild(article);
    }


}