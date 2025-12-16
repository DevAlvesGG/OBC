const express = require('express');
const router = express.Router();

const homeController = require('./controller/homeController');
const taskController = require('./controller/taskController');



router.get('/', homeController.home);//Rota que exibe a home page
router.get('/tasklist' , taskController.index);//Rota que exibe todas as tarefas
router.get('/tasks/:id', taskController.show)//Rota que exibe uma tarefa específica
router.get('/tasklist/new', taskController.create);//Rota que exibe o formulário para criar uma nova tarefa
router.post('/tasklist/new', taskController.save);//Rota que salva a nova tarefa

router.post('/tasklist/complete/:id', taskController.toggleComplete) //Rota que marca ou desmarca uma tarefa como completa
router.post('/tasklist/delete/:id', taskController.delete) //Rota que deleta uma tarefa específica
router.get('/tasklist/edit/:id', taskController.edit); //Rota que exibe o formulário para editar uma tarefa
router.post('/tasklist/edit/:id', taskController.update); //Rota que atualiza a tarefa editada
module.exports = router;