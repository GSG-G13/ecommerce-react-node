import { useState, useEffect } from 'react';
import './cart.css';

const Cart = () => {

  const [count, setCount] = useState([]);


useEffect(()=>{
  


}, [])

  return (
    <div>
      <div class="cart-container">
        <div class="left-side">
          <div class="cart-title">
            <h1>Shopping Cart</h1>
            <h1>2 Items</h1>
          </div>

          <div class="cart-table">
            <hr class="table-line" />
            <div class="table-title">
              <h4>PRODUCT DETAILS</h4>
              <h4>QUANTITY</h4>
              <h4>PRICE</h4>
            </div>

            <div class="product-cart-info">
              <div class="product-details">
                <img
                  src="./images/product-03.jpg"
                  alt=""
                  class="product-cart-img"
                />

                <div class="item-details">
                  <h3>IPhone</h3>
                  <span>Mobile</span>
                  <a href="#">Remove</a>
                </div>
              </div>

              <div class="quantity">
                <button class="dec">ــ</button>
                <span class="quantity-num">2</span>
                <button class="inc">+</button>
              </div>

              <div class="price">
                <h3>$350</h3>
              </div>

              <div class="product-details">
                <img
                  src="./images/product-03.jpg"
                  alt=""
                  class="product-cart-img"
                />

                <div class="item-details">
                  <h3>IPhone</h3>
                  <span>Mobile</span>
                  <a href="#">Remove</a>
                </div>
              </div>

              <div class="quantity">
                <button class="dec">ــ</button>
                <span class="quantity-num">2</span>
                <button class="inc">+</button>
              </div>

              <div class="price">
                <h3>$350</h3>
              </div>
            </div>
          </div>
          <a href="" class="continue-shop">
            Continue Shopping
          </a>
        </div>

        <div class="right-side">
          <div class="order-title">
            <h1>Order Summary</h1>
            <hr class="total-line" />
          </div>

          <div>
            <hr class="total-line" />
            <div class="total-cost">
              <h3>TOTAL COST</h3>
              <h3>$450</h3>
            </div>

            <div class="checkout-btn">
              <button class="checkout">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;