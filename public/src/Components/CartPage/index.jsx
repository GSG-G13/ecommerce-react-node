import "./style.css";

const CartPage = () => {
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

      <div class="cart-item">
        <div class="cart-container">
          <img src="./img/clothes.jpg" alt="" />
          <div class="cart-info">
            <div class="remove">
              <button>Remove</button>
            </div>

            <div class="item-cart-info">
              <h3>Coat</h3>
              <h1>Orange Coat</h1>
              <hr />
              <span>$350</span>
            </div>

            <div class="item-count">
              <div class="dec">
                <button>-</button>
              </div>
              <h3>0</h3>
              <div class="inc">
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartPage;