var arr1 = [5, 2, 1, -10, 8, 11, 6];
var arr2 = [5, 2, 1, -9, 3, 7]; 

function toUnion(array1, array2) {
    var newArr = [];
    var tempArr = [];
    var obj = {};

    tempArr = array1.concat(array2); 
    
    for(var i = 0; i < tempArr.length; i++) obj[tempArr[i]] = true;

    for(var key in obj) newArr.push(key);
    
    return newArr;
}

console.log(toUnion(arr1, arr2));