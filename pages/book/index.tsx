import {memo} from "react";
import OverView from "~/component/OverView/OverView";
import Navigation from "~/component/Navigation/Navigation";

const book = memo(() => {
  return (
    <div>
      <OverView/>
      <Navigation/>
    </div>
  )
})
export default book

