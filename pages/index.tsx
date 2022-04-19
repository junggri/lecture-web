import type {NextPage} from 'next'
import OverView from "~/component/OverView/OverView";
import Layout from "~/component-system/Layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <OverView/>
    </Layout>
  )
}

export default Home
