const kibria = {
    name: 'RJ Kibria',
    id: 101,
    money: 10000,
    givenTreat: function(expense, tips){
        this.money = this.money - expense - tips;
        console.log(this);
        return this.money;
    }
}

const balam = {
    name: 'singer Balam',
    id: 102,
    money: 5000
}
// kibria.givenTreat.call(balam, 500, 100);
// kibria.givenTreat. call(balam, 500, 100);

kibria.givenTreat.apply(balam, [500, 100])