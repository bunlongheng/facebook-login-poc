import "./App.css";

import FacebookLogin from "react-facebook-login";
import { useState } from "react";
function App() {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");
  
    const responseFacebook = (response) => {
        console.log(response);
        // Login failed
        if (response.status === "unknown") {
          alert("Login failed!");
          setLogin(false);
          return false;
        }
        //Login success
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      };
      //logout function 
      const logout = () => {
        setLogin(false);
        setData({});
        setPicture("");
      };
    return (
        <div className="App">
            <header className="App-header">
                <FacebookLogin
          appId="596931935777735"
          autoLoad={false}
          fields="name, email, picture"
          scope="public_profile,email"
          callback={responseFacebook}
          icon="fa-facebook"
        />
       
            </header>
        </div>
    );
}

export default App;
