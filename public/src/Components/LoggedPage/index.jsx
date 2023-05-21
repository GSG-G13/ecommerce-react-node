import "./style.css";

const LoggedPage = () => {
  return (
    <div>
      <div class="bg-effect">
        <div class="first-eff">
          <img src="./img/effect1.png" />
        </div>

        <div class="sec-eff">
          <img src="./img/effect2.png" />
        </div>
      </div>

      <header>
        <nav>
          <div class="home">
            <a href="index.html">
              <img src="./img/home.png" />
              <span>Home</span>
            </a>
          </div>

          <ul>
            <li>|</li>
            <a href="#">
              <li>About</li>
            </a>
            <li>|</li>
            <a href="product.html">
              <li>Products</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Orders</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>

          <div class="left-side">
            <div class="search-form">
              <input type="text" class="search-input" />
            </div>
            <div class="cart-btn">
              <a href="cart.html">
                <img src="./img/cart.png" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div class="main-ui">
        <div class="photo-container">
          <div class="main-photo"></div>
          <div class="info-container">
            <div class="logo">
              <img src="./img/logohmood2.png" />
            </div>
            <div class="info">
              <div class="headline">
                <h1>Fashion</h1>
                <h1>and Style</h1>
              </div>
              <h3>SPECIAL DEALS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus fugiat eius veniam necessitatibus veritatis, fuga ad
                commodi reiciendis? In, sit sapiente?
              </p>
            </div>

            <div class="shoping-btn">
              <hr />
              <button class="spring-btn">SPRING 2023</button>
              <button>ORDER NOW</button>
            </div>
          </div>
          <div class="photo-container-eff">
            <div class="third-eff">
              <img src="./img/effect3.png" />
            </div>

            <div class="fourth-eff">
              <img src="./img/effect4.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedPage;
