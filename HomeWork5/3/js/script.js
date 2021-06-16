var arr = [1,2,3,4,5,2,6,7,2,9,11,2];

var find = function(array, value) {
    var newArr = [];
    array.forEach(function(item, index){
        if(item === value) newArr.push(index);
    });
    return newArr;
};

find(arr, 2).forEach(function(index){
    console.log('position - ' + index);
});