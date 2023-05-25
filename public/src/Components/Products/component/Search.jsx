import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({searchQuery,handleSearch }) => {
  return (
    <div className="search-header">
      <div className="container">
        <div className="info">
          <div className="input">
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleSearch}
          />            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="fa-magnifying-glass"
              id="ic"s
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
