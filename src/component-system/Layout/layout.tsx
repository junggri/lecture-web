import {FC, memo, ReactNode} from "react";
import styles from "./layout.module.scss"
import classNames from "classnames";

interface Props {
  children: ReactNode
  style?: string
}

const Layout: FC<Props> = memo(({children, style}) => {
  return (
    <div className={classNames(styles.layout, style)}>
      {children}
    </div>
  )
})


export default Layout
