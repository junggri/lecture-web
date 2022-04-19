import {FC, memo, ReactNode} from "react";
import styles from "./layout.module.scss"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = memo(({children}) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
})


export default Layout
