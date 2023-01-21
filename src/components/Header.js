import React from "react"
import me from "./images/me.jpg"

export default function Header(){
    return(
        <div>
            <img src={me} alt="" width="317px" height="150px" />
        </div>
    )
}