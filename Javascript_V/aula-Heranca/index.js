class Property {
    constructor (area, price) {
        this.area = area;
        this.price = price;
    }

    getPricePerSquareMeter() {
        return this.price / this.area;
    }
}

class House extends Property { }

const land = new Property(100, 50000);

const house = new House(200, 30000)

console.log(land);
console.log(house instanceof Property); // true, o js entende que o house é uma intancia de Property por conter os mesmos atributos

class Apartament extends Property {
    constructor (number, area, price) {
        super(area, price) // chama o construtor da classe pai Property 
        this.number = number;
    }
}

const myApartament = new Apartament(237, 300, 40000)


console.log(myApartament)