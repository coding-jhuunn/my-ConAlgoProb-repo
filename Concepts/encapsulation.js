//private means the classes funcrtion variable doesn't matter what cannot access these directly unless make some of these public
// encapsulations prevents the misunderstanding of naming of variables between classes
// var I in class A cannot misinterpret with var I in class B
//encapsulations happens within classes --> scoping
// encapsulations allows you to encapsulate things that shouldn't be modified by the others parts of your code
// bundling data
// we use encapsulations for ff
// security
// hide implementation and expose behaviour
// loose coupling - modify the implementation anytime

class Employee {
  setDetail(name, id, number) {
    this.name = name;
    this.id = id;
    this.number = number;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getNum() {
    return this.number;
  }
}

let emp1 = new Employee();
emp1.setDetail("asd", 1, 10000);
console.log(emp1.getName());
console.log(emp1.getId());
console.log(emp1.getNum());
