// first way
const student = {name:'Jabed', age: 12, class: 'seven'};
console.log(student);

// second way
const person = new Object();
console.log(person);

// third way
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.name);

// fourth way .. 

/* syntactic sugar = Syntactic sugar means that the new features of the language are not really new. Instead, they are a nicer syntax for something existing/ You could do exactly the same by writing something different in the old version. Due to that, there are transpilers like Babel which can convert the new syntax to the old one. */

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const people1 = new People('shahed', 21);
console.log(people1);

// fifth way
function Obj(name, age){
    this.name = name;
    this.age = age;
}
const people2 = new Obj('arif', 20);
console.log(people2);