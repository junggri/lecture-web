import React, {FC, memo, useEffect, useRef, useState} from "react";
import styles from "./OverView.module.scss"
import Header from "~/component/Header/Header";
import Search from "~/component/Search/Search";
import {throttle} from "lodash"

interface Props {

}

const OverView: FC<Props> = memo(() => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const overViewRef = useRef<HTMLDivElement | null>(null)
  const [minHeight, setMinHeight] = useState<number>(0)
  const [maxHeight, setMaxHeight] = useState<number>(0)

  useEffect(() => {
    if (!headerRef.current) {
      return
    }

    const style = window.getComputedStyle(headerRef.current as Element);
    setMinHeight(parseInt(style.height, 10))
  }, [])

  useEffect(() => {
    if (!overViewRef.current) {
      return
    }

    const style = window.getComputedStyle(overViewRef.current as Element);
    setMaxHeight(parseInt(style.height, 10))
  }, [])

  const test = throttle(() => console.log(123), 1000);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
    })
  }, [])


  return (
    <div className={styles.overView} ref={overViewRef}>
      <div ref={headerRef}>
        <Header/>
        <Search/>
      </div>
    </div>
  )
})

export default OverView
