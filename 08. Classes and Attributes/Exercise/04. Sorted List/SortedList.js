class List {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }
  add(element) {
    this.list.push(element);
  }

  remove(index) {
    if (index > -1 && index < this.list.length) {
      return this.list.splice(index, 1);
    }
  }

  get(index) {
    return this.list[index];
  }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
