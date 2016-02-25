var task = Object.create(Object.prototype);

var task2 = {
    title: 'another title',
    descript: 'another description'
};


Object.defineProperty(task,'toString',{
    value:function(){
        return this.title + ' '+this.description;
    },
    writable:false,
    enumerable:false,
    configurable:false
});
task.title = "My task";
task.description = "My Description";

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask,'toString',{
    value:function(){
        return this.title + ' '+'is urgent';
    },
    writable:false,
    enumerable:false,
    configurable:false
});


console.log(urgentTask.toString());