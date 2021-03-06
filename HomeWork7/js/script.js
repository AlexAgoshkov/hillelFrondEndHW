var user = [  {    name: 'Panda Vasya',    url: 'https://cutt.ly/Hn90ez7',
    description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'  },
  {    name: 'Panda Petya',
    url: 'https://cutt.ly/Fn90xUG',
    description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'  },
  {    name: 'Panda Fedya',
    url: 'https://cutt.ly/qn90nbw',
    description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'  }];

function createContentInToDiv(tag, styleClass, content, div) {
    var element = document.createElement(tag);

    if (tag === 'img') {
      element.src = content;
    } 
    else {
      element.innerHTML = content;
    }
    
    element.classList.add(styleClass);
    
    div.appendChild(element);
    document.body.appendChild(div); 
}

var myDiv = document.createElement('div');

user.forEach(function(item){
  createContentInToDiv('img', 'image', item.url, myDiv);
  createContentInToDiv('h1', 'name', item.name, myDiv);
  createContentInToDiv('p', 'desc', item.description, myDiv);
});