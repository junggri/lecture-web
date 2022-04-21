import React, {memo} from 'react'
import Layout from "~/component-system/Layout/layout";
import styles from "./Intro.module.scss"

const Intro = memo(() => {
  return (
    <Layout style={styles.intro}>
      <div className={styles.introduce}>
        <h1>안녕하세요!</h1>
        <h2>
          <p>
            자바스크립트의 세계에 오신것을 환영합니다. 이곳에 오시게 되었다는건 이제 본격적으로 언어를 공부하겠다는 의지가 담겨있다고 믿겠습니다!
            공부를 시작하기 전 왜? 프로그래밍을 공부하는지 생각해보는 시간을 가지고 공부를 시작하시기를 추천드립니다.
          </p>
          <br/>
          <p>
            여기에 오신것만으로도 여러분은 이제 꽃을 심을준비를 완료하셨습니다. 손에 들고있는 꽃이 어떤 꽃이던 결국 봉우리를 맺어 향기를 뽐을 날이
            오기마련입니다. 그 과정은 녹록치 않을겁니다. 이쁘지 않은 꽃을 피워 사람들 발에 밟힐수도 있죠, 그래도 다시 키워낼 용기를 가져야합니다.
            남들이 뭐라고하든 자신을 믿으며 전진하십세요. 우리의 인생은 우리가 만들어나갈때 가장 아릅답습니다.
          </p>
        </h2>
      </div>
      <div className={styles.philosophy}>
        <h1>이 곳의 철학</h1>
        <h2></h2>
      </div>
      <div className={styles.way}>
        <h1>이 곳의 방향성</h1>
      </div>
    </Layout>
  )
})

export default Intro
