function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name, //nome da nave
        captain, //nome do capitão
        speed: 20, //velocidade da nave
        inMission: true, //se a nave está na missão
        crew: [] //membros da tripulação
    }
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`)

    return spaceship
}

function accelerate(targetSpeed: number, spaceship: {name: string, speed: number}) { 
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else {
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt("Insira o nome da nave a ser enviada para a missão:")
const spaceshipCaptain = prompt("Insira o nome do capitão da missão:")

sendSpaceship(spaceshipName, spaceshipCaptain)


const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = parseInt(prompt("Insira a velocidade que deseja acelerar:"))
accelerate(speed, currentShip )