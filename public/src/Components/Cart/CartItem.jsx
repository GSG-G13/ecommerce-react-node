const CartItem = ({name, category, totalPrice, id, quantity, removeItem, handleAdd, handleSubtract}) => {
    return <>
          <div className="product-details">
            <img
              src="./images/product-03.jpg"
              alt=""
              className="product-cart-img"
            />

            <div className="item-details">
              <h3>{name}</h3>
              <span>{category}</span>
              {/* suppose to be button */}
              <div className="remove_button" onClick={() => {
                removeItem({id})
              }}>Remove</div> 
            </div>
          </div>

          <div className="quantity">
            <button className="dec" style={{color: 'red', fontSize: 24}} onClick={() => {
              handleSubtract({id})
            }}>-</button>
            <span className="quantity-num">{quantity}</span>
            <button className="inc" style={{color: 'red'}} onClick={() => {
              handleAdd({id})
            }}>+</button>
          </div>

          <div className="price">
            <h3>${totalPrice}</h3>
      </div>  
    </>
}

export default CartItem;
