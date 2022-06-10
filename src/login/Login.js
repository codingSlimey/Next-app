import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Footer from "../welcome/Footer";


export default function Login() {
    return (
        <main className="welcome--display">
            <Navbar />
            <Form />
            <Footer />
        </main>
    )
}