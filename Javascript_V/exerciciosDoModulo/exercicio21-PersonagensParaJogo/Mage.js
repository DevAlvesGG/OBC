const Character = require ('./Character.js');

class Mage extends Character {
    constructor (name, health, attack, defense, magicPoints) {
        super(name, health, attack, defense)
        this.magicPoints = magicPoints; // Pontos de magia específicos para o Mage
    }

    attackMethod (target) {
        const damage =  (this.attack + this.magicPoints) - target.defense; // Dano aumentado com pontos de magia

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

    healMethod (target) {
        const heal = target.health += target.magicPoints * 2; // Cura aumentada com pontos de magia

        console.log(`${this.name} curou ${target.name} e restaurou ${heal} de vida.`);
        console.log(`Status do ${target.name}: ${target.health} de vida restante.`)
    }
}

module.exports = Mage;