console.log('Programa iniciado!')

// Define um temporizador que executa uma função após um certo atraso.
// O valor retornado por setTimeout (timeoutId) é um identificador único para este temporizador.
// Ele pode ser usado posteriormente para cancelar o temporizador antes que a função seja executada.
const timeoutId = setTimeout(() => {
    // Esta é a função de callback que será executada quando o temporizador expirar.
    console.log('3 segundos se passaram desde que o programa foi iniciado.');
}, 1000 * 3); // O segundo argumento é o atraso em milissegundos.
              // 1000 milissegundos * 3 = 3000 milissegundos, ou seja, 3 segundos.

// Para cancelar um temporizador antes que ele execute sua função de callback,
// utilizamos a função clearTimeout().
// Passamos o 'timeoutId' (o identificador do temporizador) como argumento para clearTimeout.
// Ao fazer isso, a função de callback associada a 'timeoutId' NÃO será executada.
clearTimeout(timeoutId);

// Neste exemplo específico, como clearTimeout(timeoutId) é chamado imediatamente após setTimeout,
// a mensagem "3 segundos se passaram desde que o programa foi iniciado."
// NUNCA será exibida no console, pois o temporizador é limpo antes de ter a chance de expirar.

let seconds = 0; // Inicializa a variável 'seconds' com 0. Esta variável irá armazenar a contagem de segundos.

// Define um intervalo que executa uma função repetidamente a cada X milissegundos.
// O valor retornado por setInterval (intervalId) é um identificador único para este intervalo.
// Ele pode ser usado posteriormente para parar o intervalo.
const intervalId = setInterval(() => {
    // Esta é a função de callback que será executada a cada intervalo.

    seconds += 3; // A cada execução, adiciona 3 aos 'seconds'.
    console.log(`se passaram ${seconds} segundos`); // Imprime a contagem atual de segundos no console.

    // Verifica se a contagem de 'seconds' atingiu ou ultrapassou 12.
    if (seconds >= 12) {
        // Se 'seconds' for 12 ou mais, o intervalo é limpo (parado).
        // clearInterval() é usado para interromper a execução repetida da função de callback.
        // Passamos 'intervalId' (o identificador do intervalo) para garantir que o intervalo correto seja parado.
        clearInterval(intervalId);
    }
}, 1000 * 3); // O segundo argumento é o atraso em milissegundos entre cada execução da função.
              // 1000 milissegundos * 3 = 3000 milissegundos, ou seja, 3 segundos.
              // Isso significa que a função de callback será executada a cada 3 segundos.

// Resumo do fluxo:
// 1. O intervalo começa e a cada 3 segundos a função é executada.
// 2. Na primeira execução (após 3 segundos), 'seconds' se torna 3.
// 3. Na segunda execução (após 6 segundos), 'seconds' se torna 6.
// 4. Na terceira execução (após 9 segundos), 'seconds' se torna 9.
// 5. Na quarta execução (após 12 segundos), 'seconds' se torna 12.
// 6. A condição 'seconds >= 12' se torna verdadeira, e clearInterval(intervalId) é chamado,
//    interrompendo futuras execuções do intervalo.