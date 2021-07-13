var li = document.querySelectorAll('li');
var player = 'X';
var store = [];

var winCells = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [3,5,8], [0,4,8], [2,4,6]];  

li.forEach(function(el, i){
  el.addEventListener('click', function(e){
  var _this = e.target;
  customClick(_this, i);
 });
 store.push('');
});

function customClick(item, i){
  if(!store[i]){
    item.innerHTML = togglePlayer(i);

    checkWinner();
    checkDraw();
  }
}
 
function togglePlayer(i) {
  player = player === 'X' ? 'O' : 'X';
  store[i] = player;
  return player; 
}

function checkDraw(){
    for(var i = 0; i < store.length; i++){
      console.log(store[i]);
      if(store[i] === '') return;
    }
    alert('Draw');
}

function checkWinner() {
  for(var i = 0; i < winCells.length; i++){
      var winRow = winCells[i];

      var cell1 = winRow[0];
      var cell2 = winRow[1];
      var cell3 = winRow[2];

      if(store[cell1] == '' && store[cell2] == '' && store[cell3] == '') continue;

      if(store[cell1] === store[cell2] && store[cell2] === store[cell3]) alert('WINNER is ' + store[cell1]);
  }
}