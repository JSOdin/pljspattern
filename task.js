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
    configurable:true
});
task.title = "My task";
task.description = "My Description";

console.log(Object.keys(task));