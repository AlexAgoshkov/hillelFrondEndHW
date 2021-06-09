function GetSymbol() {
   while(true) {
       var symbol = prompt('Input Symbol'); 
         if(symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/') {
            return symbol;
      }
   }
}

function GetValueCount() {
   while(true) {
      var count = +prompt('Input Count of Value');
        if(count > 1) {
           return count;
      }   
   } 
}

function GetResult() {
     var symbol = GetSymbol();
     var count = GetValueCount();
     var result = 0;
     var log;

      if(symbol.length == 0 || count < 1) {
         alert('Something went wrong');
         return;
      }

     for (var i = 0; i < count; i++) {
          var value = +prompt('Input value'); 
              if(value == 'exit') return; 
              
              if (log == null) log = value + symbol;
                  else if(i == count-1) log += value + '=';
                     else log += value + symbol;

          switch (symbol) {
             case '+':
                result += value;
                break;
             case '-':
               if(result == 0)  result = value; 
                  else result -= value;
                  break;
             case '*':
                  result *= value;
                  break;
             case '/':
               if(result == 0) result = value;
                  else result /= value;
                  break;
             default:
                break;
          }
     }
     alert(log+result);
}

GetResult();