var arr = [1,2,3,4,5,2,6,7,2,9,11,2];

var find = function(array, value) {
    var newArr = [];
     for(var i = 0; i < array.length; i++) {
         if(array[i] === value) newArr.push(i);
     }
    return newArr;
};

var result = find(arr, 2);
for(var i in result) console.log('position - ' + result[i]);