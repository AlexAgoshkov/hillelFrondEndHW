var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

var newArr = arr.filter(function(number) {
    return number !== false && number;
  });

  console.log(newArr);