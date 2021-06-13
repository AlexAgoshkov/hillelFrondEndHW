var array= ["php", "php", "css", "css","script", "script", "html", "html", "java"];

function removeDuplicates(arr) {
   var newArr = [];

   for(var i = 0; i < arr.length; i++) {
       if(newArr.length == 0) newArr[newArr.length] = arr[i]; 
         
       var count = 0;

       for(var j = 0; j < newArr.length; j++) if(newArr[j] == arr[i]) count++;
       
       if(count < 1) newArr[newArr.length] = arr[i];
   }

   return newArr;
}

console.log(removeDuplicates(array));