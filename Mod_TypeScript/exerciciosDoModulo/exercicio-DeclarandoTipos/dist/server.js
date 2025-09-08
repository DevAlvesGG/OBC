const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const infoSpaceship = {
        name,
        pilot,
        crewLimit, //limite de tripulação
        crew: [], //array de menbros da tripulação
        inMission: false
    };
    spaceships.push(infoSpaceship);
    alert(`A nave ${infoSpaceship.name} foi registrada`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`A tripulação da nave ${spaceship.name} está cheia`);
    }
    else {
        alert(`O membro ${member} foi adicionado a tripulação da nave ${spaceship.name}`);
        spaceship.crew.push(member);
    }
}
function sendSpaceshipToMission(spaceship) {
    if (spaceship.inMission) {
        alert(`A nave ${spaceship.name} já está em uma missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`A ${spaceship.name} não pode ser enviada. Tripulação insuficiente`);
    }
    else {
        alert(`A ${spaceship.name} foi enviada para a missão`);
        spaceship.inMission = true;
    }
}
function firstMenuOption() {
    const spaceshipName = prompt("Insira o nome da nave :");
    const spaceshipPilot = prompt("Insira o nome do pilot :");
    const spaceshipCrewLimit = Number(prompt("Insira o limite de tripulação :"));
    const confirmation = confirm(`Confirma o registro da nave ${spaceshipName}, do piloto ${spaceshipPilot} e com limite de tripulação de ${spaceshipCrewLimit}?`);
    if (confirmation) {
        addSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit);
    }
}
function secondMenuOption() {
    const member = prompt("Insira o nome do membro da tripulação :");
    const spaceshipName = prompt(`Insira o nome da nave que o ${member} será adicionado : `);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão do ${member} na tripulação da ${spaceshipName} ?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
    else {
        alert(`A nave ${spaceshipName} não foi encontrada`);
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt("Qual nave deseja enviar para missão :");
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja enviar ${spaceshipName} para Missão ? `);
        if (confirmation) {
            sendSpaceshipToMission(spaceship);
        }
    }
    else {
        alert(`A nave ${spaceshipName} não foi encontrada`);
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `;
        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`;
        });
    });
    alert(list);
}
//Menu ------------------------------
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
