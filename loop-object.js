const student = {
    name: 'sagar',
    age: 17,
    class: 'eleven',
    isHonest: true
}

/* 
for (let i = 0; i<10; i++){} 
for(const num of numbers){} //array
for(const prop in student){} //object
*/

for(const prop in student){
    // console.log(prop, student[prop]);
}

const keys = Object.keys(student);
for (const key of keys) {
    // console.log(key, student[key]);
}

// another (addvanced) way
for(const [key, value] of Object.entries(student)){
    console.log(key, value);
}