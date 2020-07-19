class Animal {
  constructor(name, type) {
    this.type = type;
    this.name = name;
  }
  toString() {
    return `${this.name} is a ${this.type}`
  }
}





var dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'