const parent = document.querySelector('.main');
const hostUrl = 'https://jsonplaceholder.typicode.com/';

setUpUsers();

function sendRequest(url, route){
  const request = new XMLHttpRequest();
  let result;

  request.open('GET', url + route, false);

  request.onreadystatechange = function() {
    if (request.DONE && request.status == "200") {
      result = JSON.parse(request.response);
    }
  }
  request.send();

  return result;
}

function setUpUsers() {
  let users = sendRequest(hostUrl, 'users');

  users.forEach(element => {
    addUsersOnScreen(parent, element.id, `${element.name}`);
  });
}

function addUsersOnScreen(parentElem, id, data) {
	
  let childDiv = document.createElement('div');
  childDiv.className = 'link-container';
  childDiv.innerHTML = data;

  childDiv.addEventListener('click', function () {
    showProfile(this.childNodes[1].innerHTML);
 });

  let p = document.createElement('p');
  p.className = 'p'
  p.innerHTML = id;
  childDiv.appendChild(p);

	parentElem.appendChild(childDiv);
}

function showProfile(userId) {
 const profile = document.querySelector('.profile');

 if(profile != null){
   profile.remove();
 }
 
 var profileData = sendRequest(hostUrl, 'users/' + userId);

 let profileDiv = document.createElement('div');
 profileDiv.className = "profile";

 profileDiv.innerHTML =  `Name - ${profileData.name} <br>
                          Email - ${profileData.email} <br>
                          UserName - ${profileData.username} <br>
                          Phone Number - ${profileData.phone} <br>
                          Website - ${profileData.website}`;

 document.body.appendChild(profileDiv);
}
