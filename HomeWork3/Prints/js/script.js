var symlob = '#';

for (var i = 0; i < 9; i++) {
   console.log(symlob);
   symlob += '#';      
}

var width = 12;
var length = 28;
var pic = '';

for (var i = 0; i < width; i++) {
    for (var j = 0; j < length; j++) {
      if(j == 0) pic += '"#';
      
      //1
      else if(i == 0 && j == length-1) pic += '#"';
      
      else if(i > 0 && j == length-1) pic += '#"';

      //2
      else if(i == 1 && j <= length-24) pic += '#';

      else if(i == 1 && j >= length-6) pic += '#';

      //3
      else if(i == 2 && j <= length-27) pic += '#'; 

      else if(i == 2 && j <= length-21 && j >= length-23) pic += '*';

      else if(i == 2 && j <= length-3 && j >= length-4) pic += '*';

      else if(i == 2 && j == length-2) pic += '#';
 
      //4
      else if(i == 3 && j == length-24) pic += '*';

      else if(i == 3 && j <= length-22 && j >= length-24) pic += '#';

      else if(i == 3 && j <= length-20 && j >= length-24) pic += '*';

      else if(i == 3 && j <= length-9 && j >= length-10) pic += '*';

      else if(i == 3 && j == length-6) pic += 'O';

      else if(i == 3 && j == length-3) pic += '*';

      else if(i == 3 && j == length-2) pic += '#';

      //5
      else if(i == 4 && j <= length-21 && j >= length-23) pic += '*';

      else if(i == 4 && j == length-15) pic += 'O';

      else if(i == 4 && j <= length-9 && j >= length-10) pic += '#';

      else if(i == 4 && j <= length-7 && j >= length-8) pic += '*';

      else if(i == 4 && j == length-2) pic += '*';

      //6
      else if(i == 5 && j == 7) pic += 'O';

      else if(i == 5 && j <= length-9 && j >= length-10) pic += '#';

      else if(i == 5 && j <= length-6 && j >= length-8) pic += '*';

      //7
      else if(i == 6 && j <= length-9 && j >= length-10) pic += '#';

      else if(i == 6 && j <= length-7 && j >= length-8) pic += '*';

      //8
      else if(i == 7 && j == 3) pic += 'O';

      else if(i == 7 && j == 13) pic += '#';

      else if(i == 7 && j == 14) pic += '*';
      
      //9
      else if(i == 8 && j == 1) pic += '*';

      else if(i == 8 && j == 13) pic += '#';

      else if(i == 8 && j <= length-13 && j >= length-15) pic += '*';

      else if(i == 8 && j == 22) pic += 'O';

      //10
      else if(i == 9 && j <= length-25 && j >= length-27) pic += '*';

      else if(i == 9 && j <= length-14 && j >= length-15) pic += '#';
 
      else if(i == 9 && j <= length-12 && j >= length-13) pic += '*';

      else if(i == 9 && j == 20) pic += 'O';

      else if(i == 9 && j <= length-2 && j >= length-3) pic += '*';

      //11
      else if(i == 10 && j == length-27) pic += '#';

      else if(i == 10 && j <= length-23 && j >= length-27) pic += '*';

      else if(i == 10 && j <= length-14 && j >= length-16) pic += '#';

      else if(i == 10 && j <= length-11 && j >= length-14) pic += '*';

      else if(i == 10 && j == length-4) pic += '*';
     
      else if(i == 10 && j <= length-2 && j >= length-3) pic += '#';

      //last - 12
      else if(i == 0 || i == width - 1) pic += '#';

      else pic += ' ';
    }
    pic += '\n';
}
console.log(pic);

// "############################" 1
// "#####                 ######" 2
// "##   ***                **##" 3
// "#   *##**         **  O  *##" 4
// "#    ***     O    ##**    *#" 5
// "#       O         ##***    #" 6
// "#                 ##**     #" 7
// "#   O       #*             #" 8
// "#*          #**       O    #" 9
// "#***        ##**    O    **#" 10
// "##****     ###***       *###" 11
// "############################" 12