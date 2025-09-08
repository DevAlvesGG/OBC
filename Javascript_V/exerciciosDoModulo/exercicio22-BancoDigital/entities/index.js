const App = require('./App.js');

App.createUser("gustavodevgarcia@gmail.com", "Gustavo Alves")
App.createUser("lucas@gmail.com", "Lucas Maluco")
App.createUser("pedreiroLoco@gmail.com", "PedreiroLoco")


App.deposit("gustavodevgarcia@gmail.com", 100)

App.transfer("gustavodevgarcia@gmail.com", "lucas@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("pedreiroLoco@gmail.com", 2000, 24)

console.log(App.findUser("gustavodevgarcia@gmail.com"))
console.log(App.findUser("gustavodevgarcia@gmail.com").account)
console.log(App.findUser("lucas@gmail.com"))
console.log(App.findUser("lucas@gmail.com").account)
console.log(App.findUser("pedreiroLoco@gmail.com"))
console.log(App.findUser("pedreiroLoco@gmail.com").account)
console.log(App.findUser("pedreiroLoco@gmail.com").account.loans[0].installments)