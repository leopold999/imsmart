export default class Carousel {
    constructor({ elementCarousel, elementStrip }) {
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
            console.log(e.x)
            if (e.target.closest('.strip')) {
           
                this._startDrag(event.clientX, event.clientY);
    
                return false;
            }
        });
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
        console.log(newLeft);
        if (newLeft < 0) {
            newLeft = 0;
        }

        let rightEdge = this._elCarousel.offsetWidth - this._elStrip.offsetWidth;
        
        // if (newLeft > rightEdge) {
        //     newLeft = 0;
        //   }

        if (newLeft > 300) {
        newLeft = 300;
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