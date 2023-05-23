import './main.css';
const Main = () => {
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
              <a href="">blog</a>
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
                <i className="fa-solid fa-right-to-bracket"></i>
                <a href="">login/register</a>
              </li>
              <li>
                <i className="fa-regular fa-heart"></i>
                <a href="">wishlist</a>
              </li>
              <div className="icons">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="search-header">
        <div className="container">
          <div className="logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="info">
            <div className="input">
              <input type="text" placeholder="Search for products" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="customer-support">
              <i className="fa-solid fa-headphones"></i>
              <div className="text">
                <p>customer support</p>
                <div className="number">1-800-123-45-67</div>
              </div>
              <i className="fa-solid fa-chevron-down down"></i>
              <div className="sub-div">
                <div className="first">
                  <div className="city">New York</div>
                  <div className="number">1-800-333-42-63</div>
                  <div className="light-text">
                    78 2ND HOUSE RD MONTAUK, NY, 11954
                  </div>
                  <div className="email">ny@woodstock.com</div>
                </div>
                <div className="second">
                  <div className="city">San Francisco</div>
                  <div className="number">1-800-444-23-54</div>
                  <div className="light-text">
                    1 INFINITE LOOP CUPERTINO, CA 95014
                  </div>
                  <div className="email">sf@woodstock.com</div>
                  <div className="social">
                    <i className="fa-brands fa-facebook-f facebook"></i>
                    <i className="fa-brands fa-twitter twitter"></i>
                    <i className="fa-brands fa-google-plus-g google"></i>
                    <i className="fa-solid fa-wifi wifi"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="text">
                <div>0 ITEMS</div>
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-links">
        <div className="container">
          <div className="menu">
            <i className="fa-solid fa-bars"></i> Menu
          </div>
          <ul className="main-nav">
            <li className="home rel nav">
              <a href="">
                Home<i className="fa-solid fa-chevron-down down"></i>
              </a>
              <ul className="sub-nav">
                <li>
                  <a href="">Homepage v2</a>
                </li>
                <li>
                  <a href="">Dark Watch Version</a>
                </li>
              </ul>
            </li>
            <li className="shop rel nav">
              <a href="">
                shop<i className="fa-solid fa-chevron-down down"></i>
              </a>
              <ul className="sub-nav">
                <div className="niche">
                  <div className="title">shop styles</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Shop- Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Shop- Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Shop without
                      Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Shop- 3 Columns
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Shop- 4 Columns
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Shop- 5 Columns
                    </a>
                  </li>
                </div>
                <div className="niche b-l p-l">
                  <div className="title">shop pages</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Cart
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Checkout
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>My account
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Order Tracking
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Wishlist
                    </a>
                  </li>
                </div>
                <div className="niche b-l p-l">
                  <div className="title">product pages</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Single Product
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Product without
                      Sidebar
                    </a>
                  </li>
                </div>
                <div className="niche b-l p-l">
                  <div className="title">shop categories</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Cellphones
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Computers & Tablets
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Smartwatch
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Accessories
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="categories rel nav">
              <a href="">
                categories<i className="fa-solid fa-chevron-down down"></i>
              </a>
              <ul className="sub-nav">
                <div className="niche">
                  <div className="title">Cellphones</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Smartphones
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Phablets
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Accessories
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Smartwatch
                    </a>
                  </li>
                </div>
                <div className="niche b-l p-l">
                  <div className="title">Computers & tablets</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Desktops
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Laptops
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Peripherals
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Tablets
                    </a>
                  </li>
                </div>
                <div className="niche b-l p-l">
                  <div className="title">Accessories</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Headphones
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Photo & Video
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Graphic Tablets
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Mise & Keyboards
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="theme-features rel nav">
              <a href="">
                theme features<i className="fa-solid fa-chevron-down down"></i>
              </a>
              <ul className="sub-nav">
                <div className="niche">
                  <div className="title">pages</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Theme Features
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>FAQs
                    </a>
                  </li>
                </div>
                <div className="niche b-l p-l">
                  <div className="title">shortcodes</div>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Blog shortcodes
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Product sliders
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-angle-right"></i>Product lists
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="blog rel nav">
              <a href="">
                blog<i className="fa-solid fa-chevron-down down"></i>
              </a>
              <ul className="sub-nav">
                <li>
                  <a href="">Blog- Right Sidebar</a>
                </li>
                <li>
                  <a href="">Blog- without Sidebar</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="landing-page">
        <div className="landing-container">
          <div className="main-image">
            <img src="images/landing-page-01.jpg" alt="" />
          </div>
          <div className="img2">
            <img src="images/landing-page-02.jpg" alt="" />
          </div>
          <div className="img3">
            <img src="images/landing-page-03.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="container">
          <div className="section">
            <img src="images/cat-watches.jpg" alt="" />
            <div className="text">
              <h1>Smartwatch</h1>
              <h5>5 ITEMS</h5>
            </div>
          </div>
          <div className="section">
            <img src="images/cat-computers.jpg" alt="" />
            <div className="text">
              <h1>Computer & Tablets</h1>
              <h5>12 ITEMS</h5>
            </div>
          </div>
          <div className="section">
            <img src="images/cat-cellphones.jpg" alt="" />
            <div className="text">
              <h1>Cellphones</h1>
              <h5>24 ITEMS</h5>
            </div>
          </div>
          <div className="section">
            <img src="images/cat-audio.jpg" alt="" />
            <div className="text">
              <h1>Accessories</h1>
              <h5>11 ITEMS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
