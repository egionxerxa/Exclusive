class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupMenuToggle();
  }

  setupMenuToggle() {
    const header = this.querySelector("header");
    const burgerIcon = this.querySelector(".burgerIcon");

    if (burgerIcon && header) {
      burgerIcon.addEventListener("click", () => {
        header.classList.toggle("mobileMenuOpen");
      });
    }
  }

  render() {
    this.innerHTML = `
        <header>
      <div class="topHeader">
        <div class="topHeaderContent">
          <div class="topHeaderContentDetails">
            <p class="saleBanner">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p class="shortSaleBanner">Summer Sale 50%</p>
            <a href="../../pages/pageNotFound/not-found.html" class="shopNowBtn">Shop Now</a>
          </div>
          <div class="languageSelect">
            <label for="">English</label>
          </div>
        </div>
      </div>

      <div class="bottomHeader">
        <h1 class="exclusiveHeading">Exclusive</h1>

        <ul class="navList">
          
          <li><a href="../../pages/home/home.html"  class="navLink">Home</a></li>
          <li><a href="../../pages/contact/contact.html" class="navLink">Contact</a></li>
          <li><a href="../../pages/about/about.html" class="navLink">About</a></li>
          <li><a href="../../pages/user/sign-up.html" class="navLink">Sign Up</a></li>
        </ul>
        <div class="searchContainer">
          <div class="searchBar">
            <input
              class="searchInput"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <svg
              class="searchIcon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.75 16.75L12.9723 12.9656M15.0658 7.90789C15.0658 9.80629 14.3117 11.6269 12.9693 12.9693C11.6269 14.3117 9.80629 15.0658 7.90789 15.0658C6.0095 15.0658 4.18886 14.3117 2.8465 12.9693C1.50413 11.6269 0.75 9.80629 0.75 7.90789C0.75 6.0095 1.50413 4.18886 2.8465 2.8465C4.18886 1.50413 6.0095 0.75 7.90789 0.75C9.80629 0.75 11.6269 1.50413 12.9693 2.8465C14.3117 4.18886 15.0658 6.0095 15.0658 7.90789V7.90789Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <a href="../../pages/wishlist/wishlist.html" class="headerIconLink">
            <svg
              class="heartSvg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <a href="../../pages/cart/cart.html" class="headerIconLink">
          <svg
            class="cartSvg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 5H7L10 22H26"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </a>
          <a href="../../pages/profile/profile.html" class="profileLink"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#b84545" />
              <path
                d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="responsiveHeader">
        <svg class="burgerIcon" width="40" height="40" viewBox="0 0 100 100">
          <rect x="20" y="25" width="60" height="10" fill="#000" rx="5" />
          <rect x="20" y="45" width="60" height="10" fill="#000" rx="5" />
          <rect x="20" y="65" width="60" height="10" fill="#000" rx="5" />
        </svg>

        <h1 class="exclusiveHeading">Exclusive</h1>

        <div class="headerSvgContainer">
          <a href="../../pages/wishlist/wishlist.html" class="headerIconLink">
            <svg
              class="heartSvg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="../../pages/cart/cart.html" class="headerIconLink">
          <svg
            class="cartSvg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 5H7L10 22H26"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </a>
          <a href="../../pages/profile/profile.html" class="profileLink"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#b84545" />
              <path
                d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      
      <nav class="mobileNav">
        <ul class="mobileNavList">
          <li><a href="../../pages/home/home.html" class="navLink">Home</a></li>
          <li><a href="../../pages/contact/contact.html" class="navLink">Contact</a></li>
          <li><a href="../../pages/about/about.html" class="navLink">About</a></li>
          <li><a href="../../pages/user/sign-up.html" class="navLink">Sign Up</a></li>
          <li class="mobileSearch">
            <div class="searchBar">
              <input
                class="searchInput"
                type="text"
                placeholder="Search..."
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.75 16.75L12.9723 12.9656M15.0658 7.90789C15.0658 9.80629 14.3117 11.6269 12.9693 12.9693C11.6269 14.3117 9.80629 15.0658 7.90789 15.0658C6.0095 15.0658 4.18886 14.3117 2.8465 12.9693C1.50413 11.6269 0.75 9.80629 0.75 7.90789C0.75 6.0095 1.50413 4.18886 2.8465 2.8465C4.18886 1.50413 6.0095 0.75 7.90789 0.75C9.80629 0.75 11.6269 1.50413 12.9693 2.8465C14.3117 4.18886 15.0658 6.0095 15.0658 7.90789V7.90789Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
      </header>
        `;
  }
}
customElements.define("custom-header", HeaderComponent);
