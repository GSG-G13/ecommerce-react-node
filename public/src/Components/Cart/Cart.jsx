import { useState, useEffect } from 'react';

import './cart.css';
import CartItem from './CartItem'

const data = [
  {
  id: '1',
  image: './images/product-03.jpg',
  name: 'IPhone',
  category: 'Mobile',
  price: 350,
  totalPrice: 350,
  quantity: 1,
  },
  {
    id: '2',
    image: './images/product-03.jpg',
    name: 'IPhone1',
    category: 'Mobile1',
    price: 250,
    totalPrice: 250,
  quantity: 1,

    },
    {
      id: '3',
      image: './images/product-03.jpg',
      name: 'IPhone2',
      category: 'Mobile2',
      price: 220,
      totalPrice: 220,
  quantity: 1,

    },
]

const Cart = () => {
 const [cardsItems, setCardsItems] = useState([]);


 useEffect(() => {
  setCardsItems(data)
 }, [])

const removeItem = ({id}) => {
  const result = cardsItems.filter(item => item.id !== id);
  setCardsItems(result)
}

const handleAdd = ({id}) => {
  const result = cardsItems.map(item => {
    if(item.id === id) {
      return {...item, quantity: item.quantity + 1, totalPrice: item.totalPrice+item.price}
    }else {
      return item
    }
  });
  setCardsItems(result)
}
const handleSubtract = ({id}) => {
  const selectedItem = cardsItems.find(item => item.id === id);
  if(selectedItem.quantity === 1) {
    return removeItem({id})
  }
  const result = cardsItems.map(item => {
    if(item.id === id) {
      return {...item, quantity: item.quantity - 1,  totalPrice: item.totalPrice-item.price}
    }else {
      return item
    }
  });
  setCardsItems(result)
}



 const handleItemsNumber = () => {
  const totalItems = cardsItems.reduce((sum, currentValue) => {
    return sum + currentValue.quantity
  }, 0)
  return totalItems
 }

 const handleTotalPrice = () => {
  const totalItems = cardsItems.reduce((sum, currentValue) => {
    return sum + currentValue.totalPrice
  }, 0)
  return totalItems
 }

  return (
    <div>
      <div className="cart-container">
        <div className="left-side">
          <div className="cart-title">
            <h1>Shopping Cart</h1>
            <h1>{handleItemsNumber()} Items</h1>
          </div>

          <div className="cart-table">
            <hr className="table-line" />
            <div className="table-title">
              <h4>PRODUCT DETAILS</h4>
              <h4>QUANTITY</h4>
              <h4>PRICE</h4>
            </div>

            <div className="product-cart-info">
              {cardsItems.map(item =>  <CartItem handleSubtract={handleSubtract} handleAdd={handleAdd} removeItem={removeItem} key={item.id}  {...item}/>)}


            </div>
          </div>
          <a href="" className="continue-shop">
            Continue Shopping
          </a>
        </div>

        <div className="right-side">
          <div className="order-title">
            <h1>Order Summary</h1>
            <hr className="total-line" />
          </div>

          <div>
            <hr className="total-line" />
            <div className="total-cost">
              <h3>TOTAL COST</h3>
              <h3>${handleTotalPrice()}</h3>
            </div>

            <div className="checkout-btn">
              <button className="checkout">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;