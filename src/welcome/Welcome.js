import React from "react";
import Navbar from "./Navbar";
import Main from "./Main"
import Footer from "./Footer";
// import Navbar from "../home/Navbar";

export default function Welcome() {
    return (
        <main className="welcome--display">
            <Navbar />
            <Main />
            <Footer />
        </main>
    )
}