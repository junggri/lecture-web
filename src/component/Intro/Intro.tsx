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
            자바스크립트의 세계에 오신것을 환영합니다. 이곳에 오셨다는 것은 여러분만의 이유를 가지고 공부를 시작하겠다고 마음먹었다라고 믿겠습니다.
            그 이유가 무엇이 되었던 간에 무조건 선행되어야하는 생각이 있습니다. 바로 왜 자바스크립트를 혹은 프로그래밍을 공부하지?라는 질문에 대답하는 것입니다.
            여러분들의 선택의 대한 답은 여러분만 알고있지만, 위의 질문에 대답을 하실 수 있다면, 추 후 이어지는 공부의 시간들 속에서 내적동기롤 통하여 여러분만의 길을 걸어갈 수 있다고 믿기 때문입니다.
            이곳에 들어온 분들이라면 꼭 한번쯤은 위 질문에 대답을 해보셨으면 합니다.
          </p>
        </h2>
      </div>
      <div className={styles.philosophy}>
        <h1>이곳의 철학</h1>
        <h2>
          <p>
            이곳의 철학은 결국 제가 이곳을 통해 이루고 싶은 목표에서 바탕이 되었습니다. 바로 "받은만큼 배푸는 사람이 되는 것" 입니다. 프로그래밍을 배우기 시작했다면,
            우리가 공통적으로 할 수 있고, 가질 수 있게되는 무기는 무엇일까요?제가 생각하기에는 문제를 해결할 수 있는 강력한 무기이지 않을까 싶습니다. 저는 이 무기가 세상에 도움이 될 수 있다면 가장 강력해지지 않을까 싶습니다.
            세상에 도움이 된다는 것은 무엇일까요 또 여러분은 어떻게 생각하시나요?. 제가 이 무기와 이곳을 통해 세상에 도움을 주고 싶은 것은 바로 지식의 공유입니다. 그리고 이곳을 통해
            지식을 배운분들이 또 다른 지식공유자가 되는것이 이곳의 철학이자 세상에 도움을 주는 방법이라고 생각합니다. 이곳을 통하여 저와같은 생각을 가지게 될 수 있다면, 여러분들도
            세상에 도움을 주는 사람이 되었으면 좋겠습니다.
          </p>
        </h2>
      </div>
      <div className={styles.way}>
        <h1>이 곳의 방향성</h1>
      </div>
    </Layout>
  )
})

export default Intro
