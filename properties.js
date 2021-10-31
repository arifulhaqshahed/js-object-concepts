const student = {
    name: 'sagar',
    age: 17,
    class: 'eleven'
}
const keys = Object.keys(student);
/* for (const key of keys) {
    console.log(key);
} */
// console.log(keys);

const values = Object.values(student);
// console.log(values);

const pairs = Object.entries(student);
// console.log(pairs);
// Object.seal(student);
Object.freeze(student);
delete student.age;
student.age = 34;
// console.log(student);


console.log(student);

/* Object.freeze() makes an object immune to everything even little changes cannot be made. Object.seal() prevents from deletion of existing properties but cannot prevent them from external changes. */