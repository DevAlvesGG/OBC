const Character = require('./Character.js');

class Thief extends Character {
    constructor (name, health, attack, defense) {
        super(name, health, attack, defense);
    }

    attackMethod (target) {
        const damage = (this.attack - target.defense) * 2; // Dano dobrado para o Thief

        if(damage > 0) { //se dano for maior que 0
            if(damage > target.health){
                target.health = 0;
            }else{
                target.health -= damage; //subtrai a vida do alvo com o valor do dano
            console.log(`${this.name} atacou ${target.name} e causou ${damage}`)
            console.log(`Status do ${target.name}: ${target.health} de vida restante.`);
            }
        }else{
            console.log(`${this.name} atacou ${target.name} e não causou dano.`);
        }

    }
}

module.exports = Thief;


