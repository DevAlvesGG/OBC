const Character = require ('./Character.js');

class Warrior extends Character {
    constructor (name, health, attack, defense, shieldPoints, position) {
        super(name, health, attack, defense)

        this.shieldPoints = shieldPoints;
        this.position = "attack"; // Posição do guerreiro no campo de batalha
    }

   attackMethod(target) {
    // Primeiro, verifica a posição do Warrior
    if (this.position === 'attack') {
        // Se estiver em posição de ataque, ele pode tentar causar dano
        // É importante usar target.effectiveDefense aqui para que o Warrior leve em conta
        // a defesa do alvo com escudo, se o alvo for outro Warrior em modo de defesa.
        // Se target.defense é o suficiente, mantenha. Mas a lógica anterior sugeria effectiveDefense.
        const damage = this.attack - target.defense; // Ou target.effectiveDefense se implementou isso

        if (damage > 0) {
            // Aplica o dano, garantindo que a vida não fique negativa
            target.health -= damage;
            if (target.health < 0) {
                target.health = 0;
            }
            console.log(`${this.name} atacou ${target.name} e causou ${damage} de dano.`);
            console.log(`Status do ${target.name}: ${target.health} de vida restante.`);
        } else {
            // Se o dano for 0 ou negativo, não causou dano, mas atacou
            console.log(`${this.name} atacou ${target.name}, mas não causou dano.`);
        }
    } else {
        // Se não estiver em posição de ataque (ou seja, está em 'defense')
        console.log(`${this.name} não pode atacar enquanto está na posição de defesa.`);
    }
}

    changePosition () {
        if(this.position === 'attack'){
            this.position = 'defense';
            console.log(`${this.name} mudou a posição para defesa.`);
        }else{
            this.position = 'attack';
            console.log(`${this.name} mudou a posição para ataque.`)
        }
    }
}

module.exports = Warrior;