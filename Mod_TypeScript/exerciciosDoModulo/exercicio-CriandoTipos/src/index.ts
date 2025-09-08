
type PlanetType = {
  name: string;
  coordenadas: tupla;
  situation: Options; // ou o tipo real de 'Options'
  satelites: string[];
};
// array chamada Planets, com planetas do tipo PlanetType
const Planets: PlanetType[] = [];

// tipos literais
type Options = "habitado" | "habitável" | "inabitável" | "inexplorado"

// Tupla com 4 tipos numérios
type tupla = [number, number, number, number] 

// Funções de validação e conversão da entrada do usuário
function validarCoordenadas(input: string): tupla | null {
  const partes = input.split(',').map(part => Number(part.trim()));
  if (partes.length === 4 && partes.every(num => !isNaN(num))) {
    return partes as tupla;
  }
  return null;
}

function validarSatelites(input: string): string[] {
    return input.split(',').map(s => s.trim()).filter(s => s.length > 0);
}

function validarSituacao(input: string): Options | null {
    const situacaoNormalizada = input.toLowerCase() as Options;
    const opcoesValidas = ["habitado", "habitável", "inabitável", "inexplorado"];
    if (opcoesValidas.includes(situacaoNormalizada)) {
        return situacaoNormalizada;
    }
    return null;
}


// Função que salva Planeta ao array de planetas 
function savePlanet(name: string, coordenadas: tupla, situation : Options, satelites : string[]) {
   const planet = {
        name,
        coordenadas,
        situation,
        satelites
   }
   Planets.push(planet)
}


// Função que atualiza a situação de um Planeta
function updateSituation(planet: PlanetType, newSituation: Options) {
    planet.situation = newSituation
    alert(`A situação do planeta ${planet.name} foi atualizada para ${planet.situation}`)
}

//Função que adiciona satélite a um determinado planeta
function addSatelite(planet: PlanetType, newSatelite: string): void {
    planet.satelites.push(newSatelite)
    alert(`Satélite ${newSatelite} adicionado ao planeta ${planet.name}.`)
}

function removeSatelite(planet: PlanetType, satelite: string): void {
    planet.satelites = planet.satelites.filter( s => s !== satelite)
    alert(`Satélite ${satelite} removido do planeta ${planet.name}.`)
}   

function listPlanets() {
  let list = 'Planetas Registrados:\n'

  Planets.forEach((planet : {
    name: string;
    coordenadas: tupla;
    situation: Options; 
    satelites: string[];
  }) => {
        list += `
        Planeta: ${planet.name}
        Coordenadas: ${planet.coordenadas}
        Situação: ${planet.situation}
        Satelites: ${planet.satelites}
    `})
  alert(list)
}

function firstMenuOption() {
    const planetName = String(prompt("Insira o nome do Planeta :"))
    if (!planetName) return;

    const coordenadasStr = prompt("Insira as coordenadas do Planeta :")
    const coordenadas = coordenadasStr ? validarCoordenadas(coordenadasStr) : null;
        if (!coordenadas) {
            alert("Entrada de coordenadas inválida. Tente novamente.");
            return;
        }

    const situationStr = String(prompt("Insira a situação do Planeta :"))
    const situation = situationStr ? validarSituacao(situationStr) : null;
        if (!situation) {
            alert("Situação inválida. Tente novamente.");
            return;
        }

    const satelitesStr = prompt("Insira os satelites do Planeta :")
    const satelites = satelitesStr ? validarSatelites(satelitesStr) : [];


    const confirmation = confirm(`Confirma os dados?\nPlaneta: ${planetName}\nCoordenadas: ${coordenadas}\nSituação: ${situation}\nSatélites: ${satelites}`);

    if(confirmation) {
        savePlanet(planetName, coordenadas, situation, satelites)
    }
}

function secondMenuOption() {
  const planetName = String(prompt("Insira o nome do Planeta que deseja alterar a situação: "))
  const planet = Planets.find(p => p.name === planetName);
  
  if(!planetName) {
    return;
  }

  if(planet) {
    const situationString = prompt(`Situação atual de ${planet.name}: ${planet.situation} \nInsira a nova situação (habitado, habitável, inabitável, inexplorado):`);
  
      if(situationString) {
        const newSituation = validarSituacao(situationString);

        if(newSituation){
          updateSituation(planet, newSituation)
          alert(`A situação do planeta ${planet.name} foi atualiazda para ${newSituation}`)
        }else {
          alert("Situação inválida. Por favor, escolha entre as opções fornecidas.");

        }
      }
  } else {
      alert("Planeta não encontrado.")
    }
}

function thirdMenuOption() {
  const planetName = prompt("Insira o nome do Planeta que deseja adicionar um satélite: ")
  const planet = Planets.find(p => p.name === planetName)

  if(!planetName) {
    return;
  }

  if(planet) {
    const sateliteName = String(prompt(`Insira o nome do Satélite que deseja adicionar ao Planeta ${planet.name}: `))
    const satelite = Planets.find(p => sateliteName !== null && p.satelites.includes(sateliteName))

    if(satelite) {
      alert("Satelite já existente...")
    }else{
      addSatelite(planet, sateliteName)
    }
  }

}

function fourthMenuOption(){
  const planetName = prompt("Insira o nome do Planeta que deseja remover o Satélite: ")
  const planet = Planets.find(p => p.name === planetName)

  if(planet) {
    const sateliteName = prompt("Insira o nome do Satélite que deseja remover")

    if(sateliteName && planet.satelites.includes(sateliteName)) {
      const confirmacao = confirm(`Deseja excluir o Satélite ${sateliteName}`)

      if(confirmacao) {
        removeSatelite(planet, sateliteName)
      }else {
        alert("Operação cancelada.")
      }
    }else {
      alert("Satélite não encontrado.")
    }
  }else {
    alert("Planeta não encontrado.")
  }
}

function FiveMenuOption() {
  listPlanets()
}

let userOption = 0

while (userOption !== 6) {
  const menu = `Painel Principal
    1 - Adicionar Planeta
    2 - Atualizar situação do Planeta
    3 - Adicionar satélite ao Planeta
    4 - Remover satélite do Planeta
    5 - Listar Planetas Registrados
    6 - Sair
  `

  userOption = Number(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
        secondMenuOption()
      break
    case 3:
        thirdMenuOption() 

      break
    case 4:
        fourthMenuOption()

      break
    case 5:
        FiveMenuOption()

      break
    case 6:
      alert("Encerrando o programa...")
      break
    default:
      alert("Opção inválida. Tente novamente")
      break;
  }
}