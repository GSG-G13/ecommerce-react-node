import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import {
  faRightToBracket,
  faMagnifyingGlass,
  faHeadphones,
  faWifi,
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="logo">
            <img src="images/mahani1.png" alt="" />
          </div>

          <div className="location">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="fas fa-map-marker-alt"
            id="ic"
            />
            <div className="location-details">
              <h3>Deliver to</h3>
              <h1>Palestinian Territories</h1>
            </div>
          </div>

          <div className="info">
            <div className="customer-support">
              <FontAwesomeIcon
                icon={faHeadphones}
                className="fa-headphones"
                id="ic"
              />
              <div className="text">
                <p>customer support</p>
                <div className="number">+972-594131-656</div>
              </div>

              <FontAwesomeIcon
                icon={faChevronDown}
                className="fa-chevron-down down"
                id="ic"
              />
              <div className="sub-div">
                <div className="first">
                  <div className="city">Palestine</div>
                  <div className="number">+972-594131-656</div>
                  <div className="light-text">Gaza - Remal - 78 2ND</div>
                  <div className="email">mohammed.mahanu@gmail.com</div>
                </div>
                <div className="second">
                  <div className="city">Palestine</div>
                  <div className="number">+972-595653-552</div>
                  <div className="light-text">Gaza - Remal - CA 95014</div>
                  <div className="email">ahmed.izz.murtaja@gmail.com</div>
                  <div className="social">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="fa-facebook-f facebook"
                      id="ic"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-twitter twitter"
                      id="ic"
                    />
                    <FontAwesomeIcon
                      icon={faGooglePlusG}
                      className="fa-google-plus-g google"
                      id="ic"
                    />
                    <FontAwesomeIcon
                      icon={faWifi}
                      className="fa-wifi wifi"
                      id="ic"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cart">
              <a href="">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="fa-cart-shopping"
                  id="ic"
                />
              </a>

              <div className="text">
                <div>0 ITEMS</div>
                <span>$0.00</span>
              </div>
            </div>
          </div>
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
