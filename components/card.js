class cardForProduct extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.brand = this.getAttribute("brand")
        this.imgSrc = this.getAttribute("img-src")   
        this.imgAlt = this.getAttribute("img-alt")   
        this.title = this.getAttribute("title")   
        this.category = this.getAttribute("category")   
        this.subtitle = this.getAttribute("subtitle")   
        this.description = this.getAttribute("description") 
        this.price = this.getAttribute("price")       
    
    }
    getTemplate(){
        const cardTemplate = document.createElement("template")
        cardTemplate.innerHTML = `
        <div class="product__card">
        <div class="product__card-visual">
            <h1 class="product__card-visual--title">${this.brand}</h1>
            <img class="product__card-visual--img" src="${this.imgSrc}" alt="${this.imgAlt}">
        </div>
        <div class="product__card-info">
            <div class="product__card-info-container">
                <h2 class="product__card-info-container--title">${this.title}</h2>
                <h3 class="product__card-info-container--category">${this.category}</h3>
                <h3 class="product__card-info-container--subtitles">${this.subtitle}</h3>
            </div>
            <div class="product__card-info-container">
                <p class="product__card-info-container--description">${this.description}</p>
            </div>
            <div class="product__card-action-container">
                <h3  class="product__card-action-container--price">$${this.price}</h3>
                <button class="product__card-action-container--buy-button">Buy Now</button>
            </div>
        </div>
    </div>
        `
        return cardTemplate
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){  // Pintor del DOM 
        // console.log("Hola desde el DOM")
        this.render()
    }

}

customElements.define("product-card", cardForProduct)

