export default class Appearance{
    constructor() {
        this._elemContent = document.getElementById('wrap_all');
        this._opacity = 0;
        this._elemContent.style.opacity = this._opacity;

        let interval = setInterval(() => {
            if ( this._opacity >= 0.99) clearInterval(interval);
            this._opacity = this._opacity + 0.05;
            this._elemContent.style.opacity = this._opacity;           
        }, 30)
    }
}