import {FC, memo, ReactNode} from "react";
import styles from "./InnerLayout.module.scss"

interface Props {
  children: ReactNode
}


const InnerLayout: FC<Props> = memo(({children}) => {
  return (
    <div className={styles.innerLayout}>
      {children}
    </div>
  )
})

export default InnerLayout
