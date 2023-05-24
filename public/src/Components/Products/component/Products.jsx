import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products">
      <div className="container">
        <div className="title">
          <h1>Featured Products</h1>
          <div></div>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <div class="product" key={product.id}>
              <div class="img">
                <img src={product.image} alt="" />
              </div>
              <div class="description">
                <span>{product.category}</span>
                <h2>{product.name}</h2>
              </div>
              <div class="price">
                <span>${product.price}</span>
              </div>
              <div class="more">
                <div class="add-to-cart">Add to cart</div>
                <p>{product.description}</p>
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
          ))}
          {/* <div class="product">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
