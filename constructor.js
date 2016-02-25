var Task = function(name){
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function(){
    console.log('completing task: '+this.name);
    this.complete = true;
};

Task.prototype.save = function(){
    console.log('saving Tasks: '+this.name)
};


module.exports = Task;
