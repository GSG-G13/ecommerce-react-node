import React from "react";
import homeImage from "../../img/home.png";
import cartImage from "../../img//cart.png";
import clothesImage from "../../img/clothes.jpg";

import "../main.css"

const CartPage = () => {
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

          <ul className="red">
            <li className="red">|</li>
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

      <div className="cart-item">
        <div className="cart-container">
          <img src={clothesImage} alt="Clothes" />
          <div className="cart-info">
            <div className="remove">
              <button>Remove</button>
            </div>

            <div className="item-cart-info">
              <h3>Coat</h3>
              <h1>Orange Coat</h1>
              <hr />
              <span>$350</span>
            </div>

            <div className="item-count">
              <div className="dec">
                <button>-</button>
              </div>
              <h3>0</h3>
              <div className="inc">
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
