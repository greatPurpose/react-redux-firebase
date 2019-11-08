import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signin'>Signup</NavLink></li>
            <li><NavLink to='/signup'>LogIn</NavLink></li>
        </ul>

    )
}

export default SignedOutLinks;