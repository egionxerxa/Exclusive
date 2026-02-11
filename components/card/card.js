class CardComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const image = this.getAttribute("image");
    const title = this.getAttribute("productTitle");
    const price = this.getAttribute("price");
    const stars = this.getAttribute("stars");

    this.innerHTML = `
            <div class="productCard cardContainer">
                
                <div class="imageWrapper">
                    <img class="productImage" src="${image}" alt="">

                    <div class="hoverIcons">
                        <button class="iconButton heartIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        
                        </button>
                        <button class="iconButton viewIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2565 10.962C21.7305 11.582 21.7305 12.419 21.2565 13.038C19.7635 14.987 16.1815 19 11.9995 19C7.81752 19 4.23552 14.987 2.74252 13.038C2.51191 12.7411 2.38672 12.3759 2.38672 12C2.38672 11.6241 2.51191 11.2589 2.74252 10.962C4.23552 9.013 7.81752 5 11.9995 5C16.1815 5 19.7635 9.013 21.2565 10.962V10.962Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </button>
                    </div>

                    <button class="addToCartBtn">Add To Cart</button>
                </div>

                <div class="cardBody">
                    <div class="productTitle">${title}</div>
                    <div class="priceRow">
                        <span class="priceText">${price}</span>
                    </div>
                    <div class="starsRow">
                        <span class="starsText">${stars}</span>
                    </div>
                </div>

            </div>
        `;
  }
}

customElements.define("product-card", CardComponent);
