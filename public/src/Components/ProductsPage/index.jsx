import homeImage from "../../img/home.png";
import cartImage from "../../img/cart.png";
import clothesImage from "../../img/clothes.jpg";

const ProductsPage = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="home">
            <a href="index.html">
              <img src={homeImage} alt="Home" />
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

          <div className="left-side">
            <div className="search-form">
              <input type="text" className="search-input" />
            </div>
            <div className="cart-btn">
              <a href="cart.html">
                <img src={cartImage} alt="Cart" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="collection-container">
        <h1 className="items-title">
          Featured Products ـــــــــــــــــــــ
          </h1>

        <div className="item">
          <img src={clothesImage} alt="Coat" />
          <div className="item-info">
            <h3>Coat</h3>
            <div className="item-details">
              <span>$240</span>
              <button className="add-cart">Add Cart</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={clothesImage} alt="Coat" />
          <div className="item-info">
            <h3>Coat</h3>
            <div className="item-details">
              <span>$240</span>
              <button className="add-cart">Add Cart</button>
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
