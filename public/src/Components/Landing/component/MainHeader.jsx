import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MainHeader = () => {
  const [isLogged, setIsLogged] = useState('flex');

  useEffect(() => {
    axios
      .get('/api/v1/') // check if user is logged in
      .then((res) => {
        if (res.success) {
          setIsLogged('hidden');
        } else {
          setIsLogged('flex');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main-header">
      <div className="container">
        <ul className="links">
          <NavLink className={'link'} to="/">
            <li>Home</li>
          </NavLink>
          <li>
            <a className={'link'} href="">
              Faqs
            </a>
          </li>
          <NavLink className={'link'} to="/product">
            <li>Products</li>
          </NavLink>
          <li>
            <a className={'link'} href="">
              contact us
            </a>
          </li>
          <li>
            <a className={'link'} href="">
              buy theme
            </a>
          </li>
        </ul>
        <div>
          <ul className="login" style={{ display: isLogged }}>
            <Link className={'link'} to="/signup">
              <li>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="fa-right-to-bracket"
                  id="ic"
                />
                Register
              </li>
            </Link>

            <Link className={'link'} to="/login">
              <li>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="fa-right-to-bracket"
                  id="ic"
                />
                Login
              </li>
            </Link>
            <li>
              <FontAwesomeIcon icon={faHeart} className="fa-heart" id="ic" />

              <a className={'link'} href="">
                wishlist
              </a>
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
