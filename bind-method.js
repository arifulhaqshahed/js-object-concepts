const kibria = {
    name: 'RJ Kibria',
    id: 101,
    money: 10000,
    givenTreat: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

const balam = {
    name: 'singer Balam',
    id: 102,
    money: 5000
}
const treatwillGiven = kibria.givenTreat.bind(balam);
treatwillGiven(500);
// console.log(balam);



const getGirlFriend= (name = "chokina")=>"name";
console.log(getGirlFriend());