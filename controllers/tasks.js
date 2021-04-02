const Task = require('../models/task')

module.exports = {
    index,
    new: newtask,
    create,
    show,
    update,
    delete: deleteTask,
    deleteAll
  }

function deleteAll(req, res) {
    Task.deleteMany({})
        .then(() => {
            res.redirect('/tasks')
        })
  }  

function deleteTask(req, res) {
    Task.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/tasks')
        })
  }
 
function update(req, res) {
    req.body.done = !!req.body.done
    Task.findByIdAndUpdate(req.params.id,req.body)
    .then(task => {
        res.redirect('/tasks')
    })
  }

function show(req, res) {
    Task.findById(req.params.id)
    .then( (task)  => {
        res.render('tasks/show', {
            task, 
            title: 'Tasks',
        })
    })
  }

function create(req, res) {
    req.body.done = false;
    Task.create(req.body)
    .then(() => {
        res.redirect('/tasks')
    })
  }

function index(req, res) {
    Task.find({})
        .then(tasks => res.render('tasks/index', { 
            title: 'Task List', 
            tasks,
            user: req.user
        })
        )
  }


function newtask(req, res) {
    res.render('tasks/new', {
        title: "Add New Task",
        user: req.user
    });
  }