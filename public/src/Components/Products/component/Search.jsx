import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchQuery, onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-header">
      <div className="container">
        <div className="info">
          <div className="input">
            <input type="text" placeholder="Search for products" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="fa-magnifying-glass"
              id="ic"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
