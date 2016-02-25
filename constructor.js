var Task = function(name){
    this.name = name;
    this.completed = false;
    this.complete = function(){
        console.log('completing task: '+this.name);
        this.complete = true;
    }

    this.save = function(){
        console.log('saving Tasks: '+this.name)
    }
};

var task1 = new Task('task name for constructors');
var task2 = new Task('task name for modules');
var task3 = new Task('task name for singletons');
var task4 = new Task('task name for prototypes');

task1.complete();
task1.save();
task2.complete();
task2.save();

task3.complete();
task3.save();
task4.complete();
task4.save();
