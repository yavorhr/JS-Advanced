function solve() {
   document.querySelector('tbody').innerHTML = '';
   const textArea = document.querySelectorAll('textarea')[0];
   const output = document.querySelectorAll('textarea')[1];
   output.value = '';
   const object = JSON.parse(textArea.value)[0];

   console.log(object);

   const generate = document.querySelectorAll('button')[0];

   generate.addEventListener('click', (event) => {
      const tbody = event.target.parentNode.querySelector('tbody');
      const tr = document.createElement('tr');

      tr.innerHTML = `

      <td>
          <img
              src=${object.img}>
      </td>
      <td>
          <p id="name" >${object.name}</p>
      </td>
      <td>
          <p>${object.price}</p>
      </td>
      <td>
          <p>${object.decFactor}</p>
      </td>
      <td>
          <input type="checkbox"/>
          </td>`

      tbody.appendChild(tr);
   });



   const buyBtn = document.querySelectorAll('button')[1].addEventListener('click', (event) => {
      const checkedBoxes = Array.from(event.target.parentNode.querySelectorAll('input[type="checkbox"]:checked'))
         .map(input => input.parentNode.parentNode);

      const result = {
         bought: [],
         totalSum: 0,
         decFactor: 0
      }

      for (let box of checkedBoxes) {
         const tds = box.children;
         const name = tds[1].textContent;
         const price = Number(tds[2].textContent);
         const decFactor = Number(tds[3].textContent);

         result.bought.push(name);
         result.totalSum += price;
         result.decFactor += decFactor;
      }


      output.value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalSum.toFixed(2)}\nAverage decoration factor: ${(result.decFactor / result.bought.length)}`
   })
}






// function e(type, attributes, ...content) {
//    const result = document.createElement(type);

//    for (let [attr, value] of Object.entries(attributes || {})) {
//       if (attr.substring(0, 2) == 'on') {
//          result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
//       } else {
//          result[attr] = value;
//       }
//    }

//    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

//    content.forEach(e => {
//       if (typeof e == 'string' || typeof e == 'number') {
//          const node = document.createTextNode(e);
//          result.appendChild(node);
//       } else {
//          result.appendChild(e);
//       }
//    });

//    return result;
// }