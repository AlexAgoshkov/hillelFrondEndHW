const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const reg = /^([\w\d])([\w\d].{0,1}){5,}[\w\d]$/;

btn.addEventListener('click', (e)=>{
    validateLogin(text.value);
});

function validateLogin(value) {
    if(!reg.test(value)) {
       text.value = '';
       alert('Invalid Login!!!');
    }
    else{
      window.location.href='https://google.com';
    }
} 