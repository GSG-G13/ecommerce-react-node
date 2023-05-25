
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faRightToBracket,
  faMagnifyingGlass,
  faHeadphones,
  faWifi,
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const MainHeader = () =>{
  const handleLogOut = () =>{
    fetch('/api/v1/user/logout').then((data)=> data.json())
    .then((data) => console.log(data))
  }
    return(
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
                
                <button onClick={handleLogOut}>log out</button>
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
    )
}

export default MainHeader;