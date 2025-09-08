function sendSpaceship(spceship: {pilot: string, copilot?: string}) {
    //
}

//caso queremos usar apenas um parametro ao chamar a função, por ex, somente o pilot, podemos usar uma sintaxe que evita a tipagem do typescript

//apenas colocar "?" antes do parametro que podemos indicar como opcional
sendSpaceship({pilot: 'Gustavo'})




//let input: unknown
let input: any
//input tem o tipo desconhecido
//quando fazemos isso, não podemos atribuir unknown a um tipo especifico, vai apresentar erro. segue exemplo abaixo

input = 'olaaa' //aqui funciona pq dizemos que o tipo desconhecido agora é string
// mas se inverter os papeis, vai dar erro

let text: 'olaaa'

text = input //da erro pq o tipo unknown não pode ser atribuido ao um tipo specifico como string, number entre outros

//para evitar essa tipagem, podemos desabilitar o typescript usando o 'any'