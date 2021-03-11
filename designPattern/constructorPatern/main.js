var Task = require('task');

var task1 = new Task('nams is one');
var task2 = new Task('nams is two');
var task3 = new Task('nams is three');

task1.complete();
task2.save();
task3.save();

