import { render } from 'lit-html';
import {} from './node_modules/lit-html.js'

class MyButton extends HTMLElement {
    constructor(text) {
        super();
    }
    connectedCallback() {
        this.createTemplate();
    }

    disconnectedCallback() {
        console.error("onDestroy");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.text = oldValue;
        if(newValue) {
            this.text = newValue
        }
        render(this.template(), this._root, {host: this})
    }
    
}