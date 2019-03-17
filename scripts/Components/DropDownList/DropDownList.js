export default class DropDownList {
    constructor({ elementMenu, dropComponent }) {
        this._elMenuContainer = elementMenu;
        this._dropComponent = dropComponent;

        this._elMenu = this._elMenuContainer.querySelector('.menu-services')
        this._elemDropDownMenu = document.querySelector('.drop-down');
        this._elemMenuCoord = getCoords(this._elMenu);
   
        
        window.onresize = () => {
            this._elemMenuCoord = getCoords(this._elMenu);
        }

        document.onmouseover = e => {
            if (e.target.closest('.menu-services') || e.target.closest('.drop-down') ) {
                this._render();
            } else {
                this._deleteList();
            }
        }
        
    }

    _render() {   
        this._elemDropDownMenu.innerHTML = this._dropComponent;
        this._elemDropDownMenu.style.top = this._elemMenuCoord.top + this._elMenu.offsetHeight + 'px';
        this._elemDropDownMenu.style.left = this._elemMenuCoord.left - 12  + 'px';
        this._elemDropDownMenu.style.transform =  'scale(1.1)';
    }

    _deleteList() {
        this._elemDropDownMenu.style.transform =  'scale(0.87)';
        this._elemDropDownMenu.innerHTML = '';
    }
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
    };
    
}


