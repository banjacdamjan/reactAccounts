import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Accounts app</Link>
            <ul className="navbar-nav ml-auto">
                <NavLink to="/" exact activeClassName={"activeLink"} className="nav-link">Accounts</NavLink>
                {/*NavLink ima svoju active klasu mi cemo napraviti nasu */}

                <NavLink to="/add" activeClassName={"activeLink"} className="nav-link">Add</NavLink>
                <NavLink to="/edit" activeClassName={"activeLink"} className="nav-link">Edit/Delete</NavLink>
            </ul>
        </nav>

    )


}

export default Header;

