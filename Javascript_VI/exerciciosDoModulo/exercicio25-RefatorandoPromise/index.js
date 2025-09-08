async function CreateIMC(height, weight) {  //height é altura e weight é peso
    if (typeof height !== 'number' || typeof weight !== 'number'){
        return Promise.reject('Altura e peso precisam ser números')
    } 
    return weight / (height * height) ;
}

async function showImc(height, weight){
    try{
        const imc = await CreateIMC(height, weight);
        console.log(imc)
    }catch (err) {
        console.log(err)
    }
}

showImc(1.95,100) 
showImc(1.85,60) 
showImc(1.65,70)
showImc(1.30,90)
showImc("ola")