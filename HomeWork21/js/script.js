function createCalculator(firstValue) {
   return {
      sum: function(secondValue){
         return firstValue += secondValue;
      },
      mult: function(secondValue) {
         return firstValue *= secondValue;
      },
      sub: function(secondValue) {
         return firstValue -= secondValue;
      },
      div: function(secondValue) {
         return firstValue /= secondValue;
      },
      set: function(secondValue) {
         return firstValue %= secondValue;
      }
   }
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));