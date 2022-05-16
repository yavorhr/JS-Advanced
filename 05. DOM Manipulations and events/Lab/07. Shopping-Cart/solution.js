function solve() {
   const output = document.querySelector('textArea');
   const cart = [];

   //Слагаме eventListener за най-прекия родител на всички продукти в страницата -> в случая "shopping-cart"
   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      //Проверяваме дали event-a е възникнал в случай на 'click' на 'BUTTON' и в случай, че той е от клас 'add-product'. Само тогава event-a ще бъде 'trigger-нат';
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         //качваме се две нива нагоре, за да стигнем до самия "Product";
         output.disabled = false;
         ev.target.disabled = false;
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         cart.push({ title, price });
         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      }
   });

   document.querySelector('.checkout').addEventListener('click', () => {
      //acc -> резултатът от reduce, чиято начална стойност дефинираме като втория параметър на reduce() -> {items[], total:0};
      //c -> на практика е всеки елемент от масива cart;
      const result = cart.reduce((acc, c) => {
         if (!acc.items.includes(c.title)) {
            acc.items.push(c.title);
         }
         acc.total += c.price;
         return acc;
      }, { items: [], total: 0 });
      output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`;


      Array.from(document.querySelectorAll('.add-product')).forEach(btn => console.log(btn));
      document.querySelectorAll('.add-product').forEach(btn => btn.disabled);
      Array.from(document.querySelectorAll('.add-product')).forEach(btn => console.log(btn));
   });

}
