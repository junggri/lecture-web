import {memo} from "react";
import styles from "./Search.module.scss"

const Search = memo(() => {
  return (
    <div className={styles.Search}>
      <input type="text" placeholder={"강좌를 검색하세요"}/>
    </div>
  )
})
export default Search
