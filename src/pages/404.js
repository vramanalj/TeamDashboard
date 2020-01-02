import React from "react"
import Menu from "../components/menu"
import mascot from "../assets/mascot.svg"


export default () => {
    return(
        <>
        <div id="404" style={{ display: `flex`, flexFlow: `column`,
        height: `100%`, backgroundColor: `#222629`, color : `#FFFFFF`,
        justifyContent: `space-between`, padding: `1em` }}>
            <div style={{ display: `flex`, textAlign: `center`, flex : `1`,
            flexWrap:`wrap`,alignItems:`baseline` }}>
                <div style={{color:`#ECF6DE`,fontFamily: "IBMPlexSans-SemiBold",
                fontSize:`2em`,textAlign:`left`,flex:`1`}}>MOBILE Team</div>
                <Menu/>
            </div>
            <div style={{textAlign: `center`, flex : `5`,display: `flex`,
            flexFlow:`column`,justifyContent:`center`}}>
                <h1 style={{fontFamily: "IBMPlexSans-SemiBold"}}>Page Under Constrcution</h1>
                <img src={mascot} style={{height: `15vh`, marginTop: `1em`}} alt="Mobile Team Mascot"/>
            </div>
        </div>
        </>
    )
}