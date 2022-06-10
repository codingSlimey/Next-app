import React from "react";

export default function Form() {

    return (
        <div className="form--div">

            <form className="login--form">
                <h1>Login</h1>

                <input type="text" placeholder="USERNAME" />
                <input type="text" placeholder="PASSWORD" />

                <button className="log--btn">LOGIN</button>
                <a href="#" className="flex--end">Forgot Password?</a>
                <p className="flex--end">Don't have an account? <a href="#"><b>Sign Up</b></a></p>
            </form>
        </div>
    )
}