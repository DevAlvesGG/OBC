const taskModel = require('../model/taskModel');

const taskController = {

  //GET /tasklist
    index: (req, res) => {
      const tasks = taskModel.getAllTasks();
      res.render('tasklist', { tasks });
    },

//GET /tasklist/:id
    show: (req, res) => {
      const id = req.params.id;
      const task = taskModel.getTaskById(id)
      res.render('task', { task });  
    },

//GET /task/new
    create: (req, res) => {
      res.render('createTaskForm');
    },

//GET /task/edit/:id
    edit: (req, res) => {
      res.render('updateTaskForm', { task: taskModel.getTaskById(req.params.id) });
    },

//POST /task/new
    save: (req, res) => {
      const title = req.body.title;
      const content = req.body.content;

      const task = taskModel.createTask(title, content);
      taskModel.saveTask(task);

      res.redirect('/tasklist');
    },

    //POST /task/detete/:id
    delete: (req, res) => {
      const id = req.params.id;
      taskModel.deleteTask(id);
      res.redirect('/tasklist');
    },

    toggleComplete: (req, res) => {
      const taskId = req.params.id;

      const task = taskModel.getTaskById(taskId)

      if(task) { 
        task.completed = !task.completed;
        taskModel.updateTask(task)
        res.redirect('/tasklist')
      }else {
        res.status(404).send('Tarefa não encontrada');
      }
    },

//POST /tasklist/edit/:id
    update: (req, res) => {
      const id = req.params.id;
      const title = req.body.title;
      const content = req.body.content;

      const task = taskModel.getTaskById(id);

      if (task) {
        task.title = title;
        task.content = content;

        taskModel.updateTask(task);

        res.redirect('/tasklist');
      } else {
        res.status(404).send('Tarefa não encontrada');
      }
    }
}

module.exports = taskController;