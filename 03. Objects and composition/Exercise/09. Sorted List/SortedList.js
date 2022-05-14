function createSortedList() {

  let numbersList = [];

  function add(element) {
    numbersList.push(element);
    this.size++;
    numbersList.sort((a, b) => a - b);
  }

  function remove(index) {
    if (index >= 0 && index < numbersList.length) {
      numbersList.splice(index, 1);
      this.size--;
    }
  }

  function get(index) {
    if (index >= 0 && index < numbersList.length) {
      return numbersList[index];
    }
  }

  return {
    size: 0,
    add,
    remove,
    get
  }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
