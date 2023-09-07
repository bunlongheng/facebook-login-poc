// src/LoginWithFacebook.js
import React from "react";

function LoginWithFacebook() {
    const handleLogin = () => {
        window.FB.login(function (response) {
            if (response.authResponse) {
                console.log("Successfully logged in with Facebook", response);
            } else {
                console.log("Login failed");
            }
        });
    };

    return <button onClick={handleLogin}>Login with Facebook</button>;
}

export default LoginWithFacebook;
