import { Spaceship } from "./exports";  
import lodash from "lodash";

interface Battleship extends Spaceship {
    weapons: number;
}

let myShip: Battleship = {
    name: "Explorer",
    speed: 200,
    weapons: 5
}

console.log(lodash.add(4, 5));