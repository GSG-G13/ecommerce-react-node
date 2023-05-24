import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";

const Cellphones = () => {
  return (
    <div class="cellphones">
      <div class="main-img">
        <img src="images/cellphones.jpg" />
      </div>
      <div class="products-container">
        <div class="title-main">
          <h1>Top Cellphones</h1>
          <span>woodstock choice</span>
        </div>
        <div class="cellphones-products">
          <div class="product">
            <div class="img">
              <img src="images/product-19.jpg" alt="" />
              <img src="images/product-20.jpg" alt="" class="flip-product" />
            </div>
            <div class="description">
              <span>Cellphones</span>
              <h2>Apple iPhone 5s</h2>
            </div>
            <div class="price">
              <span>$199.00-$399.00</span>
            </div>
            <div class="more">
              <div class="add-to-cart">Add to cart</div>
              <p>
                The iPhone 5s is not a radical departure in design for Apple,
                save for one very important feature. No, we...
              </p>
              <div class="options">
                <span>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-heart"
                    id="ic"
                  />
                  add to wishlist
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="fa-code-compare"
                    id="ic"
                  />
                  compare
                </span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="img">
              <div class="off">-10% off</div>
              <img src="images/product-17.jpg" alt="" />
              <img src="images/product-18.jpg" alt="" class="flip-product" />
            </div>
            <div class="description">
              <span>Cellphones</span>
              <h2>Apple iPhone 5c</h2>
            </div>
            <div class="price">
              <span>$399.00-$499.00</span>
            </div>
            <div class="more">
              <div class="add-to-cart">Add to cart</div>
              <p>
                The iPhone 5c replaces the iPhone 5 in the Apple stable,
                inheriting its internals, like the A6 processor, 4" screen...
              </p>
              <div class="options">
                <span>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-heart"
                    id="ic"
                  />
                  add to wishlist
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="fa-code-compare"
                    id="ic"
                  />
                  compare
                </span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="img">
              <img src="images/product-13.jpg" alt="" />
              <img src="images/product-14.jpg" alt="" class="flip-product" />
            </div>
            <div class="description">
              <span>Computers & tablets</span>
              <h2>Apple iMac 27-inch</h2>
            </div>
            <div class="price">
              <span>$2,100.00</span>
            </div>
            <div class="more">
              <div class="add-to-cart">Add to cart</div>
              <p>
                The idea behind iMac has never wavered: to craft the ultimate
                desktop experience. The best display, paired with
                high-performance processors,...
              </p>
              <div class="options">
                <span>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-heart"
                    id="ic"
                  />
                  add to wishlist
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="fa-code-compare"
                    id="ic"
                  />
                  compare
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">shop all cellphones</div>
      </div>
    </div>
  );
};

export default Cellphones;
