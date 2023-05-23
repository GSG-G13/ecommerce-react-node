import React from "react";
import "../main.css";
import effect1 from "../../img/effect1.png";
import effect2 from "../../img/effect2.png";
import homeImage from "../../img/home.png";
import logohmood2 from "../../img/logohmood2.png";
import effect3 from "../../img/effect3.png";
import effect4 from "../../img/effect4.png";

const MainPage = () => {
  return (
    <div>
      <div className="bg-effect">
        <div className="first-eff">
          <img src={effect1} alt="Effect 1" />
        </div>

        <div className="sec-eff">
          <img src={effect2} alt="Effect 2" />
        </div>
      </div>

      <header>
        <nav>
          <div className="home">
            <a href="index.html">
              <img src={homeImage} alt="Home" />
              <span>Home</span>
            </a>
          </div>

          <ul>
            <li>|</li>
            <a href="#">
              <li>About</li>
            </a>
            <li>|</li>
            <a href="product.html">
              <li>Products</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Orders</li>
            </a>
            <li>|</li>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>

          <div className="left-side">
            <div className="signUp">
              <button>SignUp</button>
            </div>
            <div className="signIn">
              <button>SignIn</button>
            </div>
          </div>
        </nav>
      </header>

      <div className="main-ui">
        <div className="photo-container">
          <div className="main-photo"></div>
          <div className="info-container">
            <div className="logo">
              <img src={logohmood2} alt="Logo" />
            </div>
            <div className="info">
              <div className="headline">
                <h1>Fashion</h1>
                <h1>and Style</h1>
              </div>
              <h3>SPECIAL DEALS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus fugiat eius veniam necessitatibus veritatis, fuga ad
                commodi reiciendis? In, sit sapiente?
              </p>
            </div>

            <div className="shoping-btn">
              <hr />
              <button className="spring-btn">SPRING 2023</button>
              <button>ORDER NOW</button>
            </div>
          </div>
          <div className="photo-container-eff">
            <div className="third-eff">
              <img src={effect3} alt="Effect 3" />
            </div>

            <div className="fourth-eff">
              <img src={effect4} alt="Effect 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
