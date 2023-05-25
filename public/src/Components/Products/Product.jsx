import "./product.css";
import MainHeader from "../Landing/component/MainHeader";
import Search from "./component/Search";
import Products from "./component/Products";
import Cellphones from "./component/Cellphones";
import BestProducts from "./component/BestProducts";
import Computers from "./component/Computers";
import News from "./component/News";
import Footer from "./component/Footer";
import FooterNav from "./component/FooterNav";
import CopyRight from "./component/CopyRight";
import { useState } from "react";

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchQuery.toLowerCase());
  });

  console.log(filteredProducts, "here");
  return (
    <div>
      <MainHeader />
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />
      <Products setProducts={setProducts} filteredProducts={filteredProducts} />
      <Cellphones />
      <BestProducts />
      <Computers />
      <News />
      <Footer />
      <FooterNav />
      <CopyRight />
    </div>
  );
};

export default Product;
