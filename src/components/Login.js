import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import { signup } from "../actions/auth";
import { useLocation } from 'react-router-dom'
 

export const Login = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("profile")))
      console.log(user)
    }, [location])

    const logout = () => {
      dispatch({type: 'LOGOUT'})
      history.push('/')
      setUser(null)
      };
    

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      //dispatch({ type: "AUTH", data: { result, token } });
      dispatch(signup(res?.profileObj, history));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful. Try again later");
  };

  return (
    <div>
      { !user ?
            <GoogleLogin
              clientId="1085701539299-476pgbi354gl16jv5lv3mu701g55r0kn.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  //className={style.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                >
                  Sign In with Google
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
:
<>
Get ready to gobble, {user.result.name}!
      <GoogleLogout
              clientId="1085701539299-476pgbi354gl16jv5lv3mu701g55r0kn.apps.googleusercontent.com"
              buttonText="Logout"
      onLogoutSuccess={logout}
      render={(renderProps) => (
        <Button
        //className={style.googleButton}
        color="primary"
        fullWidth
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
        variant="contained"
      >
        Sign out
      </Button>
      )}
    />
    </>
      }
    </div>
  );
};
