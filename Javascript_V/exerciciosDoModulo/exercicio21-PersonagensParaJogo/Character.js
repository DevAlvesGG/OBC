class Character {
    constructor (name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    attackMethod (target) { //target é uma instancia de Character
        const damage = this.attack - target.defense;

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

module.exports = Character; 

