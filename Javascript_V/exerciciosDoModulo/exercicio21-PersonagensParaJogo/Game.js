const Mage = require('./Mage');
const Warrior = require('./Warrior');
const Thief = require('./Thief');

const gustavo = new Warrior('Gustavo', 100, 20, 10, 5);
const lucas = new Mage('Lucas', 80, 25, 5, 15);
const maria = new Thief('Maria', 90, 15, 8, 10);
const pedro = new Warrior('Pedro', 110, 18, 12, 7);

console.table([gustavo, lucas, maria, pedro]);