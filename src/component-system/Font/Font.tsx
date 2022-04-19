import React, {FC, memo, ReactNode} from 'react'
import styles from "./Font.module.scss";
import classNames from "classnames";

interface Props {
  fontSize?: number
  thickness?: "l" | "m" | "b" | "bolder"
  children: ReactNode
  cursor?: boolean
  style?: string
}

const Font: FC<Props> = memo(({fontSize = 16, thickness = "m", cursor = false, style, children}) => {
  return (
    <div className={classNames(styles.font, style)}>
      <span className={classNames(styles[thickness])}
            style={{
              fontSize: fontSize,
              cursor: cursor ? "pointer" : "auto"
            }}
      >
        {children}
      </span>
    </div>
  )
})

export default Font
