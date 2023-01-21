import React from "react"
import fblogo from "./images/fb.png"
import twittlogo from "./images/twitter.jpg"
import instalogo from "./images/insta.jpg"

export default function Footer(){
    return(
        <div className="footer-content">
          <img src={fblogo} alt="" width="20px" height="25px" />
          <img src={twittlogo} alt="" width="20px" height="25px" />
          <img src={instalogo} alt="" width="20px" height="25px"  />
        </div>
    )
}