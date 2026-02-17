//Créez une fonction createBankAccount qui utilise une closure pour gérer un solde privé avec des méthodes deposit, withdraw, et getBalance.
const createBankAccount = () => {
let solde = 0;
const deposit = (number) => {
solde += number;
}
deposit(50);
console.log(solde);

const withdraw = (number) => {
solde -= number;
}
withdraw(10);
console.log(solde);

const getBalance = () => {
console.log('votre solde est de ' + solde + " Euros")
}
getBalance();
};
createBankAccount();