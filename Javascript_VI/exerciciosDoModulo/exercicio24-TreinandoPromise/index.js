async function CreateIMC(height, weight) {  //height é altura e weight é peso
    if (typeof height !== 'number' || typeof weight !== 'number'){
        return Promise.reject('Altura e peso precisam ser números')
    } 
    return weight / (height * height) ;
}

async function showImc(height, weight){
    try{
        const imc = await CreateIMC(height, weight);

        if (imc < 18.5) console.log('Situação: MAGREZA')
        else if (imc < 25) console.log('Situação: NORMAL')
        else if (imc < 30) console.log('Situação: SOBREPESO')
        else if (imc < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }catch (err) {
        console.log(err)
    }
}

showImc(1.95,100) 
showImc(1.85,60) 
showImc(1.65,70)
showImc(1.30,90)
showImc("ola")