import {memo} from "react";
import styles from "./Search.module.scss"

const Search = memo(() => {
  return (
    <div className={styles.Search}>
      <input type="text"/>
    </div>
  )
})
export default Search
