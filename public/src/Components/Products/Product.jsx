import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {
  faRightToBracket,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  return (
    <div>
      <div className="main-header">
        <div className="container">
          <ul className="links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Faqs</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">contact us</a>
            </li>
            <li>
              <a href="">buy theme</a>
            </li>
          </ul>
          <div>
            <ul className="login">
              <li>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="fa-right-to-bracket"
                  id="ic"
                />
                <a href="">register</a>
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="fa-right-to-bracket"
                  id="ic"
                />
                <a href="">login</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} className="fa-heart" id="ic" />

                <a href="">wishlist</a>
              </li>
              <div className="icons">
                <a href="">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fa-twitter"
                    id="ic"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="fa-facebook-f"
                    id="ic"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="fa-pinterest"
                    id="ic"
                  />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="search-header">
        <div className="container">
          <div className="info">
            <div className="input">
              <input type="text" placeholder="Search for products" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fa-magnifying-glass"
                id="ic"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="products">
        <div class="container">
          <div class="title">
            <h1>Featured Products</h1>
            <div></div>
          </div>
          <div class="products-container">
            <div class="product">
              <div class="img">
                <img src="images/product-01.jpg" alt="" />
                <img src="images/product-02.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>Smartwatch</span>
                <h2>Motorola Moto 360</h2>
              </div>
              <div class="price">
                <span>$299.99</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  The new Moto 360 combines edge-to-edge glass with an
                  exceptionally thin, polished bezel, giving you the largest
                  viewing area. Whether...
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
                <div class="off">-6% off</div>
                <img src="images/product-03.jpg" alt="" />
                <img src="images/product-04.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>Cellphones</span>
                <h2>Apple iPhone 6</h2>
              </div>
              <div class="price">
                <span>$850</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  iPhone 6 isn't just bigger — it's better in every way. Larger
                  yet thinner. More powerful, yet power efficient. It's...
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
                <img src="images/product-05.jpg" alt="" />
                <img src="images/product-06.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>Cellphones</span>
                <h2>Sony Xperia Z2</h2>
              </div>
              <div class="price">
                <span>$499.00</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  Meet Xperia Z2. An Android phone that allows you to take
                  photos and videos like never before. For moments you'll...
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
                <img src="images/product-07.jpg" alt="" />
                <img src="images/product-08.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>computers & tablets</span>
                <h2>Cintiq 22HD Touch</h2>
              </div>
              <div class="price">
                <span>$2,299.90</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  Add multi-touch gesture support to one of Wacom's most
                  versatile creative pen displays. This is a Demo Online Store.
                  No...
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
                <img src="images/product-09.jpg" alt="" />
                <img src="images/product-10.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>Accessories</span>
                <h2>Beats Snarkitecture Headphones</h2>
              </div>
              <div class="price">
                <span>$299.99</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  Completely redesigned, the Beats Studio over-ear headphones
                  are even lighter, stronger, and more comfortable, and more
                  precise than the original...
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
                <div class="off">-13% off</div>
                <img src="images/product-11.jpg" alt="" />
                <img src="images/product-12.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>Accessories</span>
                <h2>Denon Music Maniac Artisan</h2>
              </div>
              <div class="price">
                <span>$1,299.00</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  Engineered from the ground up to provide a superior personal
                  listening experience that sounds, fits, and moves like you.
                  This...
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
            <div class="product">
              <div class="img">
                <img src="images/product-15.jpg" alt="" />
                <img src="images/product-16.jpg" alt="" class="flip-product" />
              </div>
              <div class="description">
                <span>Computers & tablets</span>
                <h2>Apple iPad Mini</h2>
              </div>
              <div class="price">
                <span>$350.00</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>
                  There's more to mini than meets the eye. The new iPad mini 4
                  puts uncompromising performance and potential in your...
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
          </div>
        </div>
      </div>

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

      <div class="best-products">
        <div class="best-product-1 best-product">
          <div class="text">
            <h1>Motorola</h1>
            <h2>MOTO 360</h2>
          </div>
          <div class="empty-space"></div>
          <div class="get">
            <div class="price">$299.99</div>
            <div class="add">add to cart</div>
          </div>
        </div>
        <div class="best-product-2 best-product">
          <div class="text">
            <h1>Beats</h1>
            <h2>SOLO</h2>
          </div>
          <div class="get">
            <div class="price">$140.00</div>
            <div class="add">add to cart</div>
          </div>
        </div>
        <div class="best-product-3 best-product">
          <div class="text">
            <h1>Beats</h1>
            <h2>urbeats</h2>
          </div>
          <div class="get">
            <div class="price">$269.00</div>
            <div class="add">select options</div>
          </div>
        </div>
      </div>

      <div class="computers">
        <div class="products-container">
          <div class="title-main">
            <h1>Top computers</h1>
            <span>woodstock choice</span>
          </div>
          <div class="computer-products">
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
          <div class="btn">shop all computers</div>
        </div>
        <div class="main-img">
          <img src="images/computers.jpg" />
        </div>
      </div>

      <div class="news">
        <div class="container">
          <h1>Woodstock News</h1>
          <div class="news-container">
            <div class="news-card">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="fa-newspaper"
                id="ic"
              />

              <div class="img1 img"></div>
              <div class="text">
                <p>Oh, Princess Leia, are you all right?</p>
                <div class="date">
                  <span>20 February 2016</span>
                  <span>2 comments</span>
                </div>
              </div>
            </div>
            <div class="news-card">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="fa-newspaper"
                id="ic"
              />

              <div class="img2 img"></div>
              <div class="text">
                <p>Your time is limited...</p>
                <div class="date">
                  <span>20 February 2016</span>
                  <span>No comments yet</span>
                </div>
              </div>
            </div>
            <div class="news-card">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="fa-newspaper"
                id="ic"
              />

              <div class="img3 img"></div>
              <div class="text">
                <p>Oh, Princess Leia, are you all right?</p>
                <div class="date">
                  <span>20 February 2016</span>
                  <span>No comments yet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="footer-card">
            <img src="images/mahani1.png" alt="" />
            <p>
              Mahani is a Modern Fully Responsive Retina Ready Woocommerce
              theme. Start your Store right away with Woodstock theme.
            </p>
          </div>
          <div class="footer-card flex-1">
            <div class="title">featured products</div>
            <div class="feature-product">
              <img src="images/product-01.jpg" alt="" />
              <div class="text">
                <h3>Motorola Moto 360</h3>
                <h4>$299.99</h4>
              </div>
            </div>
            <div class="feature-product">
              <img src="images/product-02.jpg" alt="" />
              <div class="text">
                <h3>Apple iPhone 6</h3>
                <h4>$850</h4>
              </div>
            </div>
            <div class="feature-product">
              <img src="images/product-03.jpg" alt="" />
              <div class="text">
                <h3>Sony Xperia Z2</h3>
                <h4>$499.00</h4>
              </div>
            </div>
          </div>
          <div class="footer-card flex-1">
            <div class="title">top rated products</div>
            <div class="feature-product">
              <img src="images/product-05.jpg" alt="" />
              <div class="text">
                <h3>Motorola Moto 360</h3>
                <h4>$299.99</h4>
              </div>
            </div>
            <div class="feature-product">
              <img src="images/product-06.jpg" alt="" />
              <div class="text">
                <h3>Apple iPhone 6</h3>
                <h4>$850</h4>
              </div>
            </div>
            <div class="feature-product">
              <img src="images/product-07.jpg" alt="" />
              <div class="text">
                <h3>Sony Xperia Z2</h3>
                <h4>$499.00</h4>
              </div>
            </div>
          </div>
          <div class="footer-card flex-1">
            <div class="title">latest news</div>
            <div class="links">
              <li>
                <a href="">Oh, Princess Leia, are you all right?</a>
              </li>
              <li>
                <a href="">Your time is limited</a>
              </li>
              <li>
                <a href="">Tour of Envato's Melbourne Headquarted</a>
              </li>
              <li>
                <a href="">TemashDesign Portfolio</a>
              </li>
            </div>
            <div class="title m-t">Newsletter</div>
            <div class="email">
              <input type="text" placeholder="Your email address" />
              <div class="sign-up">sign up</div>
            </div>
          </div>
        </div>
      </footer>

      <div class="footer-nav">
        <div class="container">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">theme features</a>
            </li>
            <li>
              <a href="">faqs</a>
            </li>
            <li>
              <a href="">the privacy policy</a>
            </li>
            <li>
              <a href="">blog </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="copy-right">
        <div class="container">
          <p>© 2023 - Mahani Ecommerce Theme. Designed by Mohammed Mahani</p>
          <img src="images/payment_cards.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
