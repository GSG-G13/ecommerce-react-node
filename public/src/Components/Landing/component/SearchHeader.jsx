import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import {
  faHeadphones,
  faWifi,
  faCartShopping,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const SearchHeader = () => {
  return (
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
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fa-cart-shopping"
                id="ic"
              />
            </Link>

            <div className="text">
              <div>0 ITEMS</div>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
