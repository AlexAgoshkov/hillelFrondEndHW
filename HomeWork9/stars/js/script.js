var images = document.querySelectorAll('img');
var block = document.querySelector('div');
var colours = ['red','orange','yellow','yellowgreen','green'];

images.forEach(function(el, i){
  el.addEventListener('click', function(e){
    paintStart(i);
  });
});

function paintStart(index){
  for(var i = 0; i < index+1; i++){
      if(images.length === i+1) {
        images[images.length-1].src = 'source/3.png';
        
        imgHeight = images[images.length-1].height + 20;
        imgWidth = images[images.length-1].width + 20;

        images[images.length-1].style.width = imgWidth + 'px';
        images[images.length-1].style.height = imgHeight + 'px';
        
      } else{
        images[i].src = 'source/2.png';
      }
  }
  document.querySelector('h1').innerText = ++index;
  paintBlock(index);
}

function paintBlock(index){
   block.classList.add(colours[index-1]);
}