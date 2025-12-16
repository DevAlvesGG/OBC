const { v4: uuidv4 } = require('uuid');

let listaDeTarefas = [{
    id: uuidv4(),
    title: 'Estudar Node.js',
    content: 'Ler a documentação oficial e fazer exercícios práticos.'
},
{
    id: uuidv4(),
    title: 'Fazer compras',
    content: 'Comprar frutas, vegetais e itens essenciais para a casa.'
}];


const taskModel = {
    //funcao para retornar a lista de tarefas
    getAllTasks() {
        return listaDeTarefas;
    },

    //funcao para salvar uma tarefa na lista
    saveTask(task) {
        listaDeTarefas.push(task);
    },

    //funcao para deletar uma tarefa da lista
    deleteTask(id) {
        listaDeTarefas = listaDeTarefas.filter(task => task.id !== id);
    },

    //funcao para criar uma tarefa
    createTask(title, content) {
        const task = {
            title: title,
            content: content,
            id: uuidv4(), //gerando um id unico baseado no timestamp atual
            completed: false
        }
        return task
    },

    //função que bucas a tarefa pelo id
    getTaskById(id) {
        return listaDeTarefas.find(task => task.id === id);
    },

    //função que atualiza uma tarefa
    updateTask(taskToUpdate) {
        listaDeTarefas = listaDeTarefas.map(task => 
            task.id === taskToUpdate ? updatedTask : task
        );
    }

};

module.exports = taskModel;


