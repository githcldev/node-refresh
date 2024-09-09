import React from 'react'
import { Link } from "react-router-dom";
import './plain.less'
const PlainNav = (props) => {
    return (
        <div>
            <Link to="/">Widget</Link>
            <Link to="/index/widget">Widget</Link>
            <Link to="/index">Index</Link>
            <Link to="/index/about">About</Link>
            <Link to="/index/login">Login</Link>
            {props.user.isLoggedIn ? (<Link to="/indexp">P</Link>) : ''}
            {/* <Link to="/index/ca">Cancel-Async</Link>
            <Link to="/index/ac">Async-Counter</Link> */}
            <Link to="/index/extra">Extra</Link>
        </div>
    )
}
export default PlainNav
