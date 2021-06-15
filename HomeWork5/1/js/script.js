var arr =  [
    {name: 'Vasya', age: 24}, 
    {name: 'Petya', age: 12}, 
    {name: 'Fedya', age: 6}, 
    {name: 'Ann', age: 18}, 
    {name: 'Nastya', age: 40}];

var sortedArray = arr.sort(function(a, b){
    return a.age - b.age;
});

for(var i in sortedArray) {
    console.log(arr[i].name + ' : ' + arr[i].age);
}