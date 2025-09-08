class vehicle {
    move () {
        console.log('O veiculo está se movendo');
    }
}

class car extends vehicle {
    move () {
        console.log('O carro está se movendo');
    }
}

class bike extends vehicle {
    move () {
        console.log('A bicicleta está se movendo');
    }
}

class bus extends vehicle {
    move () {
        console.log('O ônibus está se movendo');
    }
}

const veiculo = new vehicle();
const carro = new car();
const bicicleta = new bike();
const onibus = new bus();

veiculo.move();
carro.move();
bicicleta.move();
onibus.move();


