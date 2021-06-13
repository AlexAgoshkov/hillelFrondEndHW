var arr = [10, 20, 30, 50, 8, 56, 0, 100, 235, 3000];

   for(var i = 0; i < arr.length; i++) {
      if(GetFirstSymbol(arr[i]) == '1' ||
       GetFirstSymbol(arr[i]) == '2' || 
       GetFirstSymbol(arr[i]) == '5') console.log(arr[i]);
   }

   function GetFirstSymbol(value) {
      return (value+'')[0];
   }