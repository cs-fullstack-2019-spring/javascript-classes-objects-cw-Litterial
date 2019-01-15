class Bank
{
    constructor(name,balance_attributes) // name and balance
    {
        this.name = name;
        this.balance= balance_attributes
    }
}

var matt_account = new Bank("Matt",1000)
var my_account = new Bank ("Juwan", 0)

console.log(matt_account.balance);// prints intial balance for Matt
console.log(my_account.balance); //prints initial balance for Juwan

matt_account.balance-=100;
my_account.balance+=100;

console.log(matt_account.balance); // new balance for matt
console.log(my_account.balance); // new balance for Juwan
