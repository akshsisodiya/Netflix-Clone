import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix" className="nav-logo" /></Link>
            <Link to='/profile'><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="nav-avatar" /></Link>
        </div>
    )
}

export default Navbar