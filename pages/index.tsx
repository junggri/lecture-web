import type {NextPage} from 'next'
import OverView from "~/component/OverView/OverView";
import ContentBody from "~/component/ContentBody/ContentBody";

const Home: NextPage = () => {
  return (
    <div>
      <OverView/>
      <ContentBody/>
    </div>
  )
}

export default Home
