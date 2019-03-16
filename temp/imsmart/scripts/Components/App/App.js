import Carousel from '../Carousel/Carousel.js';

export default class App {
    constructor({element}) {
        this._el = element;
        
        this._carouselInit(this._el)
        
    

    }

    _carouselInit(elem) {
        new Carousel(elem);
    }

}