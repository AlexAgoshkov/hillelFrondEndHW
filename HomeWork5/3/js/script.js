var myArr = [4,2,3,3,4,4,4,5,6,7,8,8,9];

var find = function(arr, value) {
    var res = arr.map(function(el, i) {
		return el === value && i;
	}).filter(function(el) {
		return el || el === 0;
	});
    return res;
};

console.log(find(myArr,4));