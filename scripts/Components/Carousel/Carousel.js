export default class Carousel {
    constructor({ elementCarousel, elementStrip }) {
        if (!elementCarousel || !elementStrip) return;
        this._elCarousel = elementCarousel;
        this._elStrip = elementStrip;
        this._carouselCoords;
        this._stripCoords;
        this._shiftX;
        this._shiftY;
        this.func;

        document.ondragstart = function() {
            return false;
        };

        this._elCarousel.addEventListener('mousedown', e => {
    
            if (e.target.closest('.strip')) {
                this._startDrag(event.clientX, event.clientY);
                return false;
            }
        });

        setTimeout(() => {
            this._elStrip.style.marginLeft = '0px';
        }, 500)
    }

    _startDrag(startClientX, startClientY) {
        this._stripCoords = this._elStrip.getBoundingClientRect();
        this._shiftX = startClientX - this._stripCoords.left;
        this._shiftY = startClientY - this._stripCoords.top;
        this._carouselCoords = this._elCarousel.getBoundingClientRect();
        this._onDocumentMouseMove = this._onDocumentMouseMove.bind(this);
        this._onDocumentMouseUp = this._onDocumentMouseUp.bind(this);

        document.addEventListener('mousemove', this._onDocumentMouseMove);
        document.addEventListener('mouseup', this._onDocumentMouseUp);
    }

    _moveTo(clientX) {
        let newLeft = clientX - this._shiftX - this._carouselCoords.left;
      
        if (newLeft < -400) {
            newLeft = -400;
        }

        if (newLeft > 0) {
        newLeft = 0;
        }

        this._elStrip.style.left = newLeft + 'px';
    }

    _onDocumentMouseMove(e) {
       this._moveTo(e.clientX);
    }

    _onDocumentMouseUp() {
        this._endDrag();
    }

    _endDrag() {
        document.removeEventListener('mousemove', this._onDocumentMouseMove);
        document.removeEventListener('mouseup', this._onDocumentMouseUp);
    }

}
