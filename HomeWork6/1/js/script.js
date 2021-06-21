var array = [2, 3, 4, 5, 6, 7];

var sum = function(arr) {
    return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
};

console.log(sum(array));