import App from './Components/App/App.js';

new App({ 
  element: document.getElementById('wrap-all')
})



let backImg = document.querySelector('.background').children[0];
let clientWidth = document.documentElement.clientWidth;
    backImg.style.width = clientWidth - 50 + 'px';

window.onresize = function(event) {
    
    let clientWidth = document.documentElement.clientWidth;
    if (parseInt(clientWidth) <= 1800) return;
    backImg.style.width = clientWidth + 'px';
  
};