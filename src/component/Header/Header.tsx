import React, {memo} from 'react'
import InnerLayout from "~/component-system/InnerLayout/InnerLayout";
import styles from "./Header.module.scss"
import Font from "~/component-system/Font/Font";

interface Props {

}

const Header = memo(() => {
  return (
    // <InnerLayout>
    <header className={styles.header}>
      <Font cursor>로고이름</Font>
      <div>
        <Font style={styles.login} fontSize={14} thickness={"l"} cursor>로그인</Font>
      </div>
    </header>
    // </InnerLayout>
  )
})

export default Header
