const Addres = require('./Addres');
class Person {
    constructor (name, street, number, neighborhood, city, state) {
        this.name = name;
        //this.addres = addres; // Instance of Addres
        this.addres = new Addres(street, number, neighborhood, city, state);
    }
}

module.exports = Person;