import "./main.css";
import MainHeader from "./component/MainHeader";
import SearchHeader from "./component/SearchHeader";
import LandingPage from "./component/LandingPage";
import Sections from "./component/Sections";

const Main = () => {
  return (
    <div>
      <MainHeader />

      <SearchHeader />

      <LandingPage />

      <Sections />
      
    </div>
  );
};

export default Main;
