import React from "react"
import video from "./make.mp4"
import  "./App.css"
const LandingPage=()=>{
    return(
  <div className="header-container container">
  <div className="full_screen_wrap">
  <video autoPlay muted loop="true" src={video}>
     </video>
     </div>
     <div className="header-overlay"></div>
     <div className="header-div">
     <h1>Welcome To The Islamic Science</h1>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum nemo minus facere aliquid reiciendis molestias in consequatur, modi quod?
    </p>
    <a href="" className="btn">Read More</a>
     </div>
  </div>
    )
}

export default LandingPage;