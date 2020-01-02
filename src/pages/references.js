import React from "react"
import Menu from "../components/menu"
import { graphql, useStaticQuery } from "gatsby"

export default () => {

    const referencesData = useStaticQuery(
        graphql`
            query ReferencesQuery {
                dataJson {
                    references{
                        section
                        items{
                            referenceTitle
                            referenceLink
                        }
                    }
                }
            }
        `
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
            </div>
            <div style={{textAlign: `center`, flex : `5`,display: `flex`,
            flexFlow:`column`,justifyContent:`center`}}>
                REFERENCES
            </div>
        </div>
        </>
    )
}