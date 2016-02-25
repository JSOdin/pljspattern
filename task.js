var task = Object.create(Object.prototype);

var task2 = {
    title: 'another title',
    descript: 'another description'
};

task.title = "My task";
task.description = "My Description";
task.toString = function(){
    return this.title + ' '+this.description;
};



console.log(task.toString());