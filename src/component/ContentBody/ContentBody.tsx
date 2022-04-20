import React, {memo} from 'react'
import Font from '~/component-system/Font/Font';
import Layout from "~/component-system/Layout/layout";
import styles from "./contentBody.module.scss"

const ContentBody = memo(() => {
  return (
    <div className={styles.contentBody}>
      <div className={styles.navWrap}>
        <Layout style={styles.wrapper}>
          <div className={styles.navigation}>
            <ul>
              <li>JAVASCRIPT</li>
              <li>BOOK</li>
            </ul>
          </div>
        </Layout>
      </div>
    </div>
  )
})

export default ContentBody
