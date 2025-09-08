function sendSpaceship(name, captain) {
    var spaceship = {
        name: name, //nome da nave
        captain: captain, //nome do capitão
        speed: 20, //velocidade da nave
        inMission: true, //se a nave está na missão
        crew: [] //membros da tripulação
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt("Insira o nome da nave a ser enviada para a missão:");
var spaceshipCaptain = prompt("Insira o nome do capitão da missão:");
sendSpaceship(spaceshipName, spaceshipCaptain);
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = parseInt(prompt("Insira a velocidade que deseja acelerar:"));
accelerate(speed, currentShip);
