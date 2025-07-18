import { useContacts } from "../context/ContactContext";
import styles from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const { state, dispatch } = useContacts();
  const { showSearch, search } = state;

  const toggleSearch = () => {
    dispatch({ type: "SET_SHOW_SEARCH", payload: !showSearch });
  };

  const handleChange = (e) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  return (
    <div className={styles.searchWrapper}>
      <button onClick={toggleSearch} className={styles.searchBtn}>
        <AiOutlineSearch size={30} />
      </button>

      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
          className={styles.searchInput}
        />
      )}
    </div>
  );
};

export default SearchBar;
