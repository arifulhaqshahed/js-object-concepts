const student = {
    name: 'Adnan Sami',
    money: 10000,
    age: 23,
    bestFriend: ['sehjad', 'sami', 'ratul', 'rakib'],
    family: {father: 'abdus samad', mother: 'rafiya khatun', member: 7},
    takeExam: function(){
        console.log(this.name ,'giving exam');
    },
    givenTreat: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}
student.takeExam();
const remaining = student.givenTreat(1000);
console.log(remaining);


/* JavaScript methods are the actions that can be performed on objects. A JavaScript method is a property containing a function definition. */