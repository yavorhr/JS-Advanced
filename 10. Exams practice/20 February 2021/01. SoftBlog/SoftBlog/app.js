function solve() {
   const section = document.querySelector('main section');
   const form = document.querySelector('form');
   form.addEventListener('submit', (event) => {
      event.preventDefault();

      const creator = document.querySelector('input[name="creator"]').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      const article = document.createElement('article');
      const h1 = document.createElement('h1');
      h1.textContent = title;

      const pCat = document.createElement('p');
      pCat.textContent = 'Category:';

      const strongCategory = document.createElement('strong');
      strongCategory.textContent = category;
      pCat.appendChild(strongCategory);

      const pCreat = document.createElement('p');
      pCreat.textContent = 'Creator:';

      const strongCreator = document.createElement('strong');
      strongCreator.textContent = creator;
      pCreat.appendChild(strongCreator);

      const pCont = document.createElement('p');
      pCont.textContent = content;

      const div = document.createElement('div');

      //Delete
      div.className = "buttons";
      const btnDelete = document.createElement('button');
      btnDelete.className = "btn delete";
      btnDelete.textContent = "Delete";
      btnDelete.addEventListener('click', btnOnDelete)

      //Archive
      const btnArchive = document.createElement('button');
      btnArchive.className = "btn archive";
      btnArchive.textContent = "Archive";
      btnArchive.addEventListener('click', btnOnArchive)

      div.appendChild(btnDelete);
      div.appendChild(btnArchive);

      article.appendChild(h1);
      article.appendChild(pCat);
      article.appendChild(pCreat);
      article.appendChild(pCont);
      article.appendChild(div);

      section.appendChild(article);

   });
}


function btnOnDelete(event) {
   const article = event.target.parentNode.parentNode;
   article.remove();
};


function btnOnArchive(event) {
   const articleTextCotent = event.target.parentNode.parentNode.querySelector('h1').textContent;
   const li = document.createElement('li');
   li.textContent = articleTextCotent;
   let ol = document.querySelector('ol');
   ol.appendChild(li);

   let titles = Array.from(ol.children);
   titles.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li=>ol.appendChild(li));

   btnOnDelete(event);
};


