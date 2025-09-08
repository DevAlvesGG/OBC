/* A função fisrt é uma função JavaScript básica. Quando você a usa com o array pilots, o TypeScript infere que ela retornará um string, pois o array é de strings. No entanto, ela não é flexível. Se você a usasse com um array de números, ela também funcionaria, mas o TypeScript não teria essa informação explícita na sua assinatura.

A função last, com <Type>, é a versão genérica. O <Type> é um marcador que diz: "Essa função vai receber um array de um tipo que eu chamarei de Type, e ela vai retornar um valor desse mesmo Type".

Quando você chama last(pilots), o TypeScript reconhece que pilots é um array de string, então ele substitui Type por string. O resultado é que a variável lastPilot é automaticamente tipada como string, garantindo a segurança de que o valor é o que você espera.
*/

function fisrt(array) {
    return array[0]
}

function last<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

const pilots = ['Kirk', 'Spock', 'McCoy', 'Scotty']

const firstPilot = fisrt(pilots)
const lastPilot = last(pilots)

//=======================================================================================

interface Ship {
  name: string
  pilot: string
}

interface Fighter extends Ship {
  weapons: number
  shields: number
}

interface Transport extends Ship {
  capacity: number
}

interface Speeder extends Ship {
  speed: number
  acceleration: number
}

// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
function cloneShip<TypeShip extends Ship>(ship: TypeShip, newName: string, newPilot: string) {
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}

const falcon: Ship = {
  name: 'Millenium Falcon',
  pilot: 'Han'
}

const xWing: Fighter = {
  name: 'Red Five',
  pilot: 'Luke',
  weapons: 4,
  shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')

//===================================================================

interface EnemyShip {
    name: string 
    pilot: string
    flag?: string
}

// O tiopo Ship não estaria correto aqui
const enemycopy = cloneShip(falcon, 'Enemy', 'Enemy')
// Mas podemos explicitamente passar o tipo para a função e agora temos o tipo EnemyShip atribuido corretamente
const enemycopy2 = cloneShip<EnemyShip>(falcon, 'Enemy2', 'Enemy2')

// Aqui temos um erro por conta do tipo Ship
enemycopy.flag = 'Imperial'

// Já aqui remos a propriedade opcional flag
enemycopy2.flag = 'Imperial'