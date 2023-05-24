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

const Product = () => {
  return (
    <div>
      <MainHeader />

      <Search />

      <Products />

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
