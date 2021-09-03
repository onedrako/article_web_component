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

    static get observedAttributes(){
        return ["brand", "img-src", "img-alt", "title", "category", "subtitle", "description", "price"]
    }   //Aqui damos de alta las variables en este observador

    attributeChangedCallback(attribute, old, newVal){
        if(old !== newVal){
            this[attribute] = newVal
        }
    }


    getTemplate(){
        const cardTemplate = document.createElement("template")
        cardTemplate.innerHTML = /*html*/`
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
    ${this.getStyles()}
        `
        return cardTemplate
    }

    getStyles(){
        return/*CSS*/`
        <style>
            :host{
                --primary-background-color: #4854a0;
                --secondary-background-color: #ffffff;
                --border-background-color: #060f1d;
            
                --brand-color: #3f4885;
            
                --title-color: #545156;
                --collection-color: ##98969a;
                --category-color: #9e9c9f;
                --price-color: #8c888d;
                --button-color: #4954a1;
                
                --font-family: Arial, Helvetica, sans-serif;
            }
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            html{
                font-size: 62.5%;
            }

            body{
                width: 100%;
                height: 100%;
                font-family: Arial, Helvetica, sans-serif;
            }

            main{
                width: 100%;
                height: 100%;
            }

            .produc__container{
                width: 100%;
                height: 100%;
            }

            .product__card{
                height: 100vh;
                width: 100%;
                background-color: white;
                padding: 10px;
                background-color: var(--border-background-color);
                /* border: var(--border-background-color) 10px solid; */
            }
            
            
            /* Primera Sección */
            
            .product__card-visual{
                height: 25%;
                width: 100%;
                position: relative;
                background-color: var(--primary-background-color);
                padding: 15px;
            }
            
            /* Elementos */
            
            .product__card-visual--title{
                font-size: 7.5rem;
                color: var(--brand-color);
            }
            
            .product__card-visual--img{
                height: 160px;
                position: absolute;
                top: 90px;
                margin-left: 30px;
            }
            
            
            /* Segunda Sección */
            
            
            .product__card-info{
                height: 75%;
                width: 100%;
                padding: 15px;
                background-color: white;
            }
            
            .product__card-info-container{
                margin-top: 25px;
                /* display: inline-block; */
            }
            
            .product__card-info-container--title{
                font-size: 2.5rem;
                /* font-weight: 800; */
                display: inline-block;
                margin-right: 10px;
            }
            
            .product__card-info-container--category{
                font-size: 1.2rem;
                display: inline-block;
                color: var(--category-color);
                letter-spacing: 1px;
            }
            
            .product__card-info-container--subtitles{
                font-size: 1.2rem;
                margin-top: 15px;
                color: var(--category-color);
                letter-spacing: 1px;
            }
            
            .product__card-info-container--description{
                display: inline-block;
                font-size: 1.5rem;
                margin-top: 10px;
            }
            
            
            /*Tercera Sección*/
            
            .product__card-action-container{
                display: flex;
                /* padding: 35px; */
                width: 100%;
                height: fit-content;
                margin-top: 50px;
                justify-content: space-between;
            }
            
            .product__card-action-container--price{
                display: inline-block;
                font-size: 2.5rem;
                color: var(--price-color);
                align-self: center;
            }
            
            .product__card-action-container--buy-button{
                display: flex;
                height: 40px;
                width: 110px;
                justify-content: center;
                align-items: center;
                font-size: 1.8rem;
                border-radius: 30px;
                background-color: var(--button-color);
                color: var(--secondary-background-color);
                font-weight: 700;
                border: none;
            }

            @media (min-width: 768px) {
                .product__container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--border-background-color);
                }
                
                /* Primera Sección */
                
                .product__card{
                    display: flex;
                    align-items: center;
                    padding: 0 75px;
                }
                
                
                .product__card-visual{
                    width: 50%;
                    height: 80%;
                }
                
                .product__card-visual--title{
                    font-size: 10rem;
                }
                
                .product__card-visual--img{
                    height: 380px;
                    margin-left: 0;
                    right: -60px;
                    transform: rotate(-35deg);
                    top: 130px;
                }
                
                /* Segunda Sección */
                
                .product__card-info{
                    width: 50%;
                    height: 80%;
                    padding: 0 15px 0 35px;
                }
                
                .product__card-info-container--title{
                    font-size: 3.5rem;
                    margin-right: 10px;
                    font-weight: 800;
                    display: block;
                }
                
                .product__card-info-container--category{
                    font-size: 1.5rem;
                    margin-right: 25px;
                }
                
                .product__card-info-container--subtitles{
                    display: inline-block;
                    font-size: 1.5rem;
                }
                
                .product__card-info-container--description{
                    display: inline-block;
                    font-size: 1.5rem;
                    margin-top: 10px;
                    padding: 0 0 0 15px;
                }
            }
            @media (min-width: 1024px){

                .product__card{
                    display: flex;
                    align-items: center;
                    padding: 0 75px;
                    width: 100%;
                }
                
                /* Primera Sección */

                .product__card-visual{
                    max-width: 650px;
                    height: 80%;
                }
                

                .product__card-visual--title{
                    font-size: 15rem;
                }

                .product__card-visual--img{
                    height: 500px;
                }

                /* Segunda Sección */

                .product__card-info{
                    max-width: 650px;
                    height: 80%;
                    padding: 0 15px 0 35px;
                }

                .product__card-info{
                    padding: 35px;
                }

                .product__card-info-container--title{
                    margin-top: 50px;
                }

                .product__card-info-container--description{
                    font-size: 1.6rem;
                }
            }

        </style>
        `
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

