import Search from "@components/Icons/Search";
import styles from "@styles/components/Button/SearchButton.module.scss";

function SearchButton() {
  return (
    <button className={styles.btn}>
      <Search className="fill-grey" />
    </button>
  );
}

export default SearchButton;
