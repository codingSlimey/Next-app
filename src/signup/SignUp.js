import React from "react";
import Navbar from "../login/Navbar";
import SignUpForm from "./SignUpForm";
import Footer  from "../welcome/Footer";

export default function SignUp() {
    return (
        <div className="welcome--display">
            <Navbar />
            <SignUpForm />
            <Footer />
        </div>
    )
}