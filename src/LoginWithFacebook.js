import React from "react";

function LoginWithFacebook() {
    const handleLogin = () => {
        window.FB.login(
            function (response) {
                if (response.authResponse) {
                    console.log("Successfully logged in with Facebook", response);
                } else {
                    console.log(response);
                    console.log("Login failed");
                }
            },
            {
                config_id: "321626767064583",
            }
        );
    };

    return <button onClick={handleLogin}>Login</button>;
}

export default LoginWithFacebook;
