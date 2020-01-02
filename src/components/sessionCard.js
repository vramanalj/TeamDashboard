import React from "react"
import mascot from "../assets/mascot.svg"
import sessionStyles from "./sessionCard.css";

export default (props) => (

    <>
        <div style={{display:`flex`,backgroundColor:`#ECF6DE`,
        height:`150px`,width:`350px`, alignItems: `center`,
        textAlign: `center`,padding: `0.5em` }}>
            <div className="cardColumns">
                <div className="circularContainer">
                    <img src={mascot}></img>
                </div>
                <div style={{color:`#241332`,fontFamily: "IBMPlexSans-Bold", 
                fontSize: `0.8rem`}}>{props.speakerName}</div>
                <div style={{color:`#241332`,fontFamily: "IBMPlexSans-Light",
                fontSize: `0.7rem`}}>{props.sessionDate} {props.sessionTimings}</div>
            </div>
            <div className="cardColumns">
                <div style={{color:`#241332`,fontFamily: "IBMPlexSans-Medium"}}>
                    {props.sessionTopic}
                </div>
                <a target="_blank" className="sessionDetailsButton" href={props.link}>Session Details</a>
            </div>
        </div>
    </>
)