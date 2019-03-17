// import App from './Components/App/App.js';
import Carousel from './Components/Carousel/Carousel.js';
import DropDownList from './Components/DropDownList/DropDownList.js';
import Appearance from './Components/Component/Component.js';

new Carousel({ 
  elementCarousel: document.getElementById('carousel'),
  elementStrip: document.getElementById('strip'),
});

new DropDownList({
  elementMenu: document.querySelector('.menu-container'),
  dropComponent: `
  <ul>
      <li><a href="../services/energy_audit.html">Энергоаудит</a></li>
      <li><a href="#">Умный дом</a></li>
      <li><a href="#">Энергосбережение</a></li>
      <li><a href="#">Инжениринг</a></li>
  </ul>
  `
})

new Appearance();
