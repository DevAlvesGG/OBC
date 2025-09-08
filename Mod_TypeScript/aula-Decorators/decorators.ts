function Decorator() {
    return function(target, key, descriptor) {
        descriptor.value = function(value: number) {
            console.log(`Calculando ${value} vezes 3`)
            console.log(`Resultado: ${value * 3}`)
            return 
        }
    }
}

class Planet {
    name: string

    constructor(name: string) {
        this.name = name
    }
    @Decorator()

    calculate(value: number) {
        return value * 2
    }
}

const planet = new Planet('Terra')
planet.calculate(5) // Isso irá exibir "Calculando 5 vezes 3"