var arr = [5, 2, 1, -10, 8, 11, 6];
console.log(arr);

function getLast(array, n) {
    var newArr = [];
  
    for(var i = array.length-1; i >= 0; i--) {
        newArr[newArr.length] = array[i];
        if(newArr.length == n) break;
    }

    return newArr;
}
console.log(getLast(arr, 4));
console.log('From Right');

function getLastSecond(array, n) {
    var newArr = [];
  
    if(n > array.length) n = array.length; 

    for(var i = array.length-n; i < array.length; i++) newArr[newArr.length] = array[i];
    
    return newArr;
}

console.log(getLastSecond(arr, 4));
console.log('From Left');