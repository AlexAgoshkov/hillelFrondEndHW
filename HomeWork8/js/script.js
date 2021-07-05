var ships = [0, 2, 3, 13, 17, 21, 25, 33, 45, 46, 47, 56, 57, 58, 59];
var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var store = [];

var div = document.createElement('div');
var divResult = document.createElement('div');
divResult.classList.add('result');
var h1 = document.createElement('h1');
divResult.appendChild(h1);
  document.body.appendChild(divResult);

var lu = document.createElement('lu');
lu.classList.add('test');
div.appendChild(lu);
  document.body.appendChild(div); 

for(var i = 0; i < 64; i++) {
  var li = document.createElement('li');
     li.classList.add('li');
     li.classList.add('pink');
     for(var j = 0; j < ships.length; j++){
        if(i === ships[j]) li.classList.add('purple');
     }

     lu.appendChild(li);
     document.body.appendChild(lu); 
}

var li = document.querySelectorAll('li');

li.forEach(function(el, i){
   var indexField = (i % 8);
   var index = Math.ceil((i+1)/8);
   el.setAttribute('data-id', index + '-' + field[indexField]);
   el.innerText = index + '-' + field[indexField];
});

function isShip(cell){
  return cell.classList.contains('purple');
}

function isDeadShip(index){
   return store.includes(index);
}

function paintDeadCell(cell, indexToStore){
  cell.style.background = 'black';
  store.push(indexToStore);
  h1.innerHTML = 'Hit';
}

var check = function(boom){
  for(var i = 0; i < li.length; i++){
      var index = li[i].getAttribute('data-id');
      if(isDeadShip(i)){
        h1.innerHTML = 'The Ship Already Hit!';
        break;
      }

      if(index === boom && isShip(li[i])) {
        paintDeadCell(li[i], i);
        break;
      }
      if(i === li.length-1 && index != boom){
          h1.innerHTML = 'Miss';
       }
  }
};

check('6-f');