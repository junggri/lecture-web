import React, {memo} from 'react'
import Font from '~/component-system/Font/Font';
import Layout from "~/component-system/Layout/layout";
import styles from "./contentBody.module.scss"
import Navigation from "~/component/Navigation/Navigation";
import Intro from "~/component/Intro/Intro";

const ContentBody = memo(() => {
  return (
    <div className={styles.contentBody}>

      <Intro/>
    </div>
  )
})

export default ContentBody
