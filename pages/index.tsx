import type {NextPage} from 'next'
import OverView from "~/component/OverView/OverView";
import ContentBody from "~/component/ContentBody/ContentBody";
import Navigation from "~/component/Navigation/Navigation";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <OverView/>
      <Navigation/>
      <ContentBody/>
    </div>
  )
}

export default Home
