import React from "react"
import video from "./make.mp4"
const LandingPage=()=>{
    return(
  <div className="header-container">
  <div className="full_screen_wrap">
  <video autoPlay muted loop="true" src={video}>
     </video>
     </div>
     <div className="header-overlay"></div>
     <div className="header-div">
     <h1>Welcome To The Islamic Science</h1>
     </div>
  </div>
    )
}

export default LandingPage;