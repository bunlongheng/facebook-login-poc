# Facebook Login React POC

This is a Proof of Concept (POC) for integrating Facebook login into a React project. The project provides a basic example of how to set up and use Facebook login functionality in a React application.

## Prerequisites

Before you begin, ensure you have the following:

-   A Facebook App ID: You need to replace `"596931935777735"` in the `appId` field with your own App ID.

## Installation

To run this project, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

3. Install the project dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm start
```

## Usage

### Initializing Facebook SDK

In the `<script>` tag within your HTML file, you will find the initialization code for the Facebook SDK. Ensure you replace the `appId` with your own Facebook App ID.

```javascript
<script>
    window.fbAsyncInit = function () {
        FB.init({
            appId: "YOUR_APP_ID", // Replace with your App ID
            cookie: true,
            xfbml: true,
            version: "v18.0",
        });

        FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
</script>
```

### React Component

The main React component in this project is `LoginWithFacebook.js`. This component provides a "Login" button that allows users to log in with their Facebook account.

```javascript
// src/LoginWithFacebook.js
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
                config_id: "YOUR_CONFIG_ID",
            }
        );
    };

    return <button onClick={handleLogin}>Login</button>;
}

export default LoginWithFacebook;
```

Replace `"YOUR_CONFIG_ID"` with your own configuration ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
