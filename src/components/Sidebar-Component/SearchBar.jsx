import styles from "./SearchBar.module.css";

export default function SearchBar({ searchValue, dispatch }) {
  function handleInputchage(event) {
    dispatch({ type: "search", value: event.target.value });
  }
  return (
    <input
      className={styles.searchBar}
      value={searchValue}
      onChange={handleInputchage}
      placeholder="Search"
    />
  );
}
