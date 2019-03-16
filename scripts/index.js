// import App from './Components/App/App.js';
import Carousel from './Components/Carousel/Carousel.js';
import DropDownList from './Components/DropDownList/DropDownList.js';


new Carousel({ 
  elementCarousel: document.getElementById('carousel'),
  elementStrip: document.getElementById('strip'),
})

new DropDownList({
  elementMenu: document.querySelector('.menu-container')
})



