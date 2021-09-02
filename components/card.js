class cardForProduct extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})    //
    }
    getTemplate(){
        const cardTemplate = document.createElement("template")
        cardTemplate.innerHTML = `
        

        `
        
    }

    connectedCallback(){  // Pintor del DOM 
        // console.log("Hola desde el DOM")
    }

}

customElements.define("product-card", cardForProduct)

