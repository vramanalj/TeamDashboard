import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import mascot from "../assets/mascot.svg"
// import appStyles from "../styles/global.css"
import downArrow from "../assets/downArrow.svg"
import SessionCard from "../components/sessionCard"
import Menu from "../components/menu"


export default ({ pageContext: { allSessions } }) => {
    let today = new Date();
    today.setDate(today.getDate() -1);
    var nextSessionData={};
    var noNextSession=true;
    // const data = useStaticQuery(
    //     graphql`
    //         query MyQuery {
    //             dataJson {
    //                 sessions {
    //                     speakerName
    //                     speakerEmailID
    //                     sessionTopic
    //                     link
    //                     sessionDate
    //                     sessionTimings
    //                     sessionLink
    //                     tag
    //                 } 
    //             }
    //         }
    //     `
    //   )
      const data=allSessions;
    

    
    let pastsessionCard = data.rows.map((item, index)=>
    { 
        if(new Date(item.doc.sessionDate)<today){
            return <SessionCard key={index} {...item.doc}/>
        }else{
            nextSessionData=item;
            noNextSession=false;
        }
    }
    )

    return(
    <>
    <div id="topsection" style={{ display: `flex`, flexFlow: `column`,
     height: `100%`, backgroundColor: `#222629`, color : `#FFFFFF`,
      justifyContent: `space-between`, padding: `1em` }}>
        <div style={{ display: `flex`, textAlign: `center`, flex : `1`,
        flexWrap:`wrap`,alignItems:`baseline` }}>
            <div style={{color:`#ECF6DE`,fontFamily: "IBMPlexSans-SemiBold",
        fontSize:`2em`,textAlign:`left`,flex:`1`}}>MOBILE Team</div>
            <Menu/>
            {/* <p style={{fontFamily: "IBMPlexSans-Light"}}>Knowledge Sharing Sessions</p> */}
        </div>
        <div style={{textAlign: `center`, flex : `5`,display: `flex`,
        flexFlow:`column`,justifyContent:`center`}}>
            <div style={{color:`#D83F87`,fontFamily: "IBMPlexSans-Bold"}}>NEXT SESSION</div>
            {!noNextSession &&
            (
                <>
                <h1 style={{fontFamily: "IBMPlexSans-SemiBold"}}>{nextSessionData.sessionTopic}</h1>
                <p style={{color:`#5CDB95`,fontFamily: "IBMPlexSans-Bold"}}>{nextSessionData.sessionDate} {nextSessionData.sessionTimings}</p>
                <a style={{ display: `block`, color: `#00B1FF`,fontFamily: "IBMPlexSans-Bold"}} href={nextSessionData.sessionLink}>
                {nextSessionData.sessionLink}
                </a>
                </>
            )
            }
            {noNextSession &&
                        (
                            <h1>TBD</h1>
                        )
            }
            <img src={mascot} style={{height: `15vh`, marginTop: `1em`}} alt="Mobile Team Mascot"/>
        </div>
        <div className="animated" style={{ display: `block`, textAlign: `center`, flex : `1` }}>
            <p style={{fontFamily: "IBMPlexSans-ExtraLight",color: `#5CDB95`}}>
                SCROLL DOWN FOR PAST SESSIONS
            </p>
            <a href="#bottomsection" style={{background: `transparent`, border: `none`}}  >
            <img style={{width: `10px`}} src={downArrow} />
            </a>
        </div>
    </div>

    <div id="bottomsection" style={{height: `100%`, backgroundColor: `#222629`,
     color : `#FFFFFF`, padding:`1em`, display: `flex`,flexFlow: `column`}}>
        <div style={{ display: `block`, textAlign: `center` }}>
            <h2 style={{color:`#D83F87`,fontFamily: "IBMPlexSans-SemiBold"}}>PAST SESSIONS</h2>
        </div>
        <div style={{ display: `flex`, flexFlow: `row`,
        justifyContent: `space-around`, flexWrap: `wrap`,
        flex: `1`}}>
            {pastsessionCard}
        </div>
    </div>
    </>
    )
}
