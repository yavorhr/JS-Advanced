function create(words) {
   words.forEach(section => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = section;

      div.appendChild(p);
      div.addEventListener('click', (event) => {
         const p = event.target.querySelector('p');
         p.style.display = p.style.display === 'none' ? 'block' : 'none';
      });
      document.getElementById('content').appendChild(div);
   })
}


