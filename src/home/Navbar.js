import React from "react";
import cardData from "../cardData";

export default function Navbar() {

    function runJobSearch() {
        let searchValue = document.querySelector('.nav--searchInp').value;
        
        const box = cardData.map(item => {
            return item.title 
        })

        console.log(box)
        return box;
    }

    return (
        <section className="nav--div">

            <div className="nav--flex1">
                <h1 className="logo">NEXT<i class="fa-solid fa-play"></i></h1>

                <div className="searchbox--div">
                    <input type="text" placeholder="Search for a job" className="nav--searchInp"/>
                    <button className="search" onClick={runJobSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>

            <nav className="navbar">
                <a href="#" className="black">Home</a>
                <a href="#" className="black">Jobs</a>
                <a href="#" className="black">Messaging</a>
                <a href="#" className="black">Articles</a>
                <a href="#" className="black">Notification</a>
                <a href="#" className="purp--link">Account</a>
                <a href="#" className="reg-btn">Logout</a>
            </nav>
        </section>
    )
}