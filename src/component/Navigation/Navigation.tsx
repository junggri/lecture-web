import React, {memo} from 'react'
import Layout from "~/component-system/Layout/layout";
import styles from "./Navigation.module.scss"
import Link from "next/link";

const Navigation = memo(() => {
  return (
    <div className={styles.navWrap}>
      <Layout style={styles.wrapper}>
        <div className={styles.navigation}>
          <ul>
            <Link href={'/javascript'}>
              <li>JAVASCRIPT</li>
            </Link>
            <Link href={"/book"}>
              <li>BOOK</li>
            </Link>
          </ul>
        </div>
      </Layout>
    </div>
  )
})

export default Navigation
