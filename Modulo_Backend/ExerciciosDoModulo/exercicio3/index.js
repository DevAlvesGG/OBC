const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');


const notesDirectory = path.join(__dirname, "notes");// cria a pasta notes


const rl = readline.createInterface({ // configura uma interface para ler os dados do usuário
    input: process.stdin,
    output: process.stdout
})

function initializeNotesDirectory() {
    if (!fs.existsSync(notesDirectory)){
        fs.mkdirSync(notesDirectory);
    }
}

function listNotes() {
    const notes = fs.readdirSync(notesDirectory); // lê os arquivos na pasta notes

    if(notes.length === 0) {
        console.log("notas não encontradas");
    }else {
        console.log(`Notas encontradas: `)
        notes.forEach((notes, index) => { console.log(`${index + 1}. ${notes}`)
        })
    }

    askFornextAction();
}

function readNotes() {
    rl.question("Digite o número da nota que deseja ler: ", (index) => {
        const notes = fs.readdirSync(notesDirectory);
        const selectedNote = notes[index - 1]

        if(!selectedNote){
            console.log("Número de nota não encontrado");
        }else {
            const notePath = path.join(notesDirectory, selectedNote);
            const content = fs.readFileSync(notePath, 'utf-8');
            console.log(`\nConteúdo da nota "${selectedNote}":\n ${content}`);
        }
        askFornextAction();
    }) 
}

function deleteNote() {
    rl.question("Digite o número da nota que deseja excluir: ", (index) => {
        const notes = fs.readdirSync(notesDirectory);
        const selectedNote = notes[index - 1]

        if(!selectedNote){
            console.log("Número de nota não encontrado");
        }else {
            const notePath = path.join(notesDirectory, selectedNote);
            fs.unlinkSync(notePath);
            console.log(`Nota "${selectedNote}" excluída com sucesso`);
        }

        askFornextAction();
    })
}

function createNote() {
    rl.question("Digite o nome da nota: ", (noteName) => {
        const notePath = path.join(notesDirectory, noteName);

        rl.question("Digite o conteudo da nota: \n", (content) => {
            fs.writeFileSync(notePath + ".txt", content, "utf-8")
            console.log(`Nota ${noteName} criada com sucesso`)

            askFornextAction();
        })
    })
}

function askFornextAction() {
    rl.question("\nDeseja realizar outra ação? (s/n): ", (answer) => {
        if(answer.toLowerCase() === "s") {
            main();
        }else {
            console.log("Encerrando o programa...");
            rl.close();
            process.exit(0);
        }
    })
}

function main() {
    initializeNotesDirectory();

    console.clear();
    console.log("--------------------------------------")
    console.log("NOTAS RAPIDAS NO TERMINAL ----v1.0")
    console.log("--------------------------------------\n")

    console.log("Selecione uma opção:");
    console.log("1. Listar notas");
    console.log("2. Ler nota");
    console.log("3. Criar nota");
    console.log("4. Excluir uma nota");
    console.log("5. Sair\n");

    rl.question("Digite o número da opção desejada: ", (option) => {
        switch(option) {
            case "1": 
                listNotes();
                break;
            case "2":
                readNotes();
                break;
            case "3":
                createNote();
                break;
            case "4":
                deleteNote();
                break;
            case "5":
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida");
                break
        }
    })
}

main();
