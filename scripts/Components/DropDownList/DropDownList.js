export default class DropDownList {
    constructor({ elementMenu }) {
        this._elMenuContainer = elementMenu;
        this._elMenu = this._elMenuContainer.querySelector('.menu-services')
        this._elemDropDown = document.querySelector('.drop-down');
        this._elemMenuCoord = this._elMenu.getBoundingClientRect();

 
        
        document.onmouseover = e => {
            if (e.target.closest('.menu-services') || e.target.closest('.drop-down') ) {
                this._render();
            } else {
                this._deleteList();
            }
        }

        

       



    
    }

    _render() {   
        this._elemDropDown.innerHTML = `
                <ul>
                    <li>Энергоаудит</li>
                    <li>Умный дом</li>
                    <li>Энергосбережение</li>
                    <li>Инжениринг</li>
                </ul>
        `;
        this._elemDropDown.style.top = this._elemMenuCoord.y + this._elMenu.clientHeight - 5 + 'px';
        this._elemDropDown.style.left = this._elemMenuCoord.x - 10 - this._elMenu.offsetWidth + (this._elemDropDown.offsetWidth / 2) + 'px';
        this._elemDropDown.style.transform =  'scale(1)';
    }

    _deleteList() {
        this._elemDropDown.style.transform =  'scale(0.87)';
        this._elemDropDown.innerHTML = '';
        
    }
}

