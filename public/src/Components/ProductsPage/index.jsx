import "./style.css";

const ProductsPage = () => {
  return (
    <div>
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
              <a href="#">
                <img src="./img/cart.png" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div class="collection-container">
        <h1 class="items-title">
          Featured Products
          ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
        </h1>

        <div class="item">
          <img src="./img//clothes.jpg" />
          <div class="item-info">
            <h3>Coat</h3>
            <div class="item-detalis">
              <span>$240</span>
              <button class="add-cart">Add Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="page-num">
        <span>1 / 2</span>

        <div class="page-btn">
          <button>{">"}</button>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet lorem vitae eros ullamcorper vestibulum.
              </p>
            </div>
            <div class="col-md-3">
              <h3>Our Services</h3>
              <nav>
                <ul>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Graphic Design</a>
                  </li>
                  <li>
                    <a href="#">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#">SEO</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-3">
              <h3>Recent Posts</h3>
              <nav>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur adipiscing elit</a>
                  </li>
                  <li>
                    <a href="#">Sed sit amet lorem vitae eros</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-3">
              <h3>Contact Us</h3>
              <p>
                123 Main St.
                <br />
                Anytown, USA 12345
              </p>
              <p>
                Phone: 555-555-5555
                <br />
                Email: info@mywebsite.com
              </p>
            </div>
          </div>
        </div>
        <div class="bottom-bar">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p>&copy; 2023 MyWebsite.com. All Rights Reserved.</p>
              </div>
              <div class="col-md-6">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
