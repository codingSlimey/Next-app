import React from "react";

export default function Navbar() {
    return (
        <div className="nav--div nav-login">
            <h1 className="logo">NEXT<i class="fa-solid fa-play"></i></h1>

            <nav className="navbar">
                <a href="#" className="black">Home</a>
                <a href="#" className="black">Jobs</a>
                <a href="#" className="black">Articles</a>
                <a href="#" className="black">Notification</a>
                <a href="#" className="black">Account</a>
            </nav>
        </div>
    )
}