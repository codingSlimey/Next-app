import React from "react";

export default function SignUpForm() {
    return (
        <div className="form--div">

            <form className="login--form">
                <h1>Sign Up</h1>

                <input type="text" placeholder="EMAIL" />
                <input type="text" placeholder="PASSWORD" />

                <button className="log--btn">SIGN UP</button>
                <p className="flex--end">Have an account? <a href="#"><b>Login</b></a></p>
            </form>

        </div>
    )
}