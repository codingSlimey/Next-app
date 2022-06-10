import React from "react";

export default function Navbar() {
    return (
        <div className="nav--div">
            <h1 className="logo">NEXT</h1>

            <nav className="navbar">
                <a href="#" className="black">Home</a>
                <a href="#" className="black">Login</a>
                <a href="#" className="reg-btn">Register</a>
            </nav>
        </div>
    )
}