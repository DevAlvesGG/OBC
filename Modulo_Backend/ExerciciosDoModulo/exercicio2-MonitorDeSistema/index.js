const os = require("node:os");
const fs = require('node:fs');

function getSystemInfo() {
    const Cpu = os.cpus();
    const processorModel = Cpu[0].model;
    
    // Obtém a memória total e livre em bytes
    const totalMemoryBytes = os.totalmem();
    const freeMemoryBytes = os.freemem();
    const usedMemoryBytes = totalMemoryBytes - freeMemoryBytes;

    // Converte bytes para GBs
    const totalMemoryGB = (totalMemoryBytes / (1024 ** 3)).toFixed(2);
    const usedMemoryGB = (usedMemoryBytes / (1024 ** 3)).toFixed(2);
    const usedPercentage = ((usedMemoryBytes / totalMemoryBytes) * 100).toFixed(2);

    // Retorna um objeto com todas as informações.
    return {
        "Plataforma do SO": os.platform(),
        "Arquitetura do SO": os.arch(),
        "Tempo de atividade": `${os.uptime()} segundos`,
        "Total de Processadores": Cpu.length,
        "Modelo do Processador": processorModel,
        "Memória Total": `${totalMemoryGB} GB`,
        "Memória em Uso": `${usedMemoryGB} GB`, // Corrigido para exibir a memória usada
        "Uso de RAM (%)": `${usedPercentage}%`,
    };
}

function showSystemInfo() {
    console.clear();
    console.log("------------------- Informações do Sistema ------------------");

    const systemInfo = getSystemInfo();

    // Este loop agora funciona perfeitamente, pois `systemInfo` é um objeto válido.
    for (const [key, value] of Object.entries(systemInfo)) {
        console.log(`${key}: ${value}`);
    }

    console.log("--------------------------------------------------");
}

function logSystemInfo() {
    const systemInfo = getSystemInfo();
    const timestamp = new Date().toISOString();

    // Converte o objeto em uma string para o log
    const logData = Object.entries(systemInfo)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
    
    const logEntry = `[${timestamp}] ${logData}\n`;

    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.log("Erro ao escrever no arquivo de log", err.message);
        } else {
            // Adicionado um retorno de sucesso para feedback
            console.log("Log escrito com sucesso!");
        }
    });
}

setInterval(showSystemInfo, 1000);
setInterval(logSystemInfo, 3000);