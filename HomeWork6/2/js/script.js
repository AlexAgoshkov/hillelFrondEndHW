var sum = 0;
function test(start, end, step) {
    if(start < 0 || end < 0 || step < 0) return 0;
    if(start > end && sum === 0) return 0;
    sum += start;
    return (start >= end) ? sum : test(start+step, end, step);
}

var result = test(2,8,2);
console.log(result);