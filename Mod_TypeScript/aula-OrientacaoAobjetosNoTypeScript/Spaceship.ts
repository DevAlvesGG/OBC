/*class Spaceship {
    private _name;
    protected captain
    protected speed;

    get name() {
        return this._name
    }

    set name(name: string) {
        this._name = this.name;
    }

  constructor(name: string, captain: string) {
    this.name = name
    this.captain = captain
    this.speed = 0
  }

  accelerate(rate: number, time: number) {
    this.speed = rate * time
  }
}

class Fighter extends Spaceship {
    weapons;

  constructor(name: string, captain: string, weapons: number) {
    super(name, captain)
    this.weapons = weapons
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }

  erase() {
   this.speed = 0
    this.captain = ''
  }
}

let ship = new Spaceship('USS Enterprise', 'James T. Kirk')

ship.accelerate(50, 2)*/