import React from "react";
import Navbar from "./Navbar";
import Footer from "../welcome/Footer";

export default function Home() {
    return (
        <div className="home--div welcome--display">
            <Navbar />
            <section className="home--sect">
                <h1 className="home--div-h1">How do you wish to proceed?</h1>

                <div>
                    <button className="home--btn ex-volunteer">EX-VOLUNTEER</button>
                    <button className="home--btn company">COMPANY</button>
                    <button className="home--btn ngo">NGO</button>
                </div>

                <button className="home--btn ind--btn">INDIVIDUAL</button>
            </section>
            <Footer />
        </div>
    )
}