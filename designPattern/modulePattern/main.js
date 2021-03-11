var Repo = require('./taskRepository');
var Task = require('./main');

var task1 = new Task(Repo.get(1));
var task2 = new Task({ name: 'create a demo for modules'});

task1.complete();
task2.save();