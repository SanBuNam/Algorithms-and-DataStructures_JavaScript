class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };

  complete() {
    console.log('completing task: ' + this.name);
    this.completed = true;
  };

  save() {
    console.log('saving task: ' + this.name);
  };
}

var task1 = new Task('task name one');

task1.complete();
task1.save();
