import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="container">
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="">Faqs</a>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
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
            <Link to="/signup" className="link">
              <li>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="fa-right-to-bracket"
                  id="ic"
                />
                register
              </li>
            </Link>
            <Link to="/login" className="link">
              <li>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="fa-right-to-bracket"
                  id="ic"
                />
                login
              </li>
            </Link>

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
  );
};

export default MainHeader;
