import React from "react"
import { Link } from "gatsby"

export default (props) => (
    <>
        <div className="menu">
            <Link activeClassName="active" to="/">Enablement</Link> 
            <Link to="/references/">References</Link>
        </div>
    </>
)