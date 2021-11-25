import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import { signup } from "../actions/auth";
import { useLocation } from 'react-router-dom'
import Tooltip from "@mui/material/Tooltip";

import { Fab } from "@mui/material";

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

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
    <div >
      { !user ?
            <GoogleLogin
              clientId="1085701539299-476pgbi354gl16jv5lv3mu701g55r0kn.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                                <Fab 
                                style={{pointerEvents: "auto"}}
                sx={{                  
                  backgroundColor: "#04b2d9",
                  border: "5px solid white",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontSize: 30,
                  fontFamily: "Archivo Black",
                }}
                aria-label="add"
              >
                  <LoginIcon />
                  </Fab>
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
:
<>
      <GoogleLogout
              clientId="1085701539299-476pgbi354gl16jv5lv3mu701g55r0kn.apps.googleusercontent.com"
              buttonText="Logout"
      onLogoutSuccess={logout}
      render={(renderProps) => (
        <Button
        //className={style.googleButton}
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
      >
                        <Tooltip arrow title="Log out">

                <Fab
                sx={{
                  backgroundColor: "#04b2d9",
                  border: "5px solid white",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "10%",
                  fontSize: 30,
                  marginRight: 5,
                  fontFamily: "Archivo Black",
                }}
                aria-label="add"
              >
                  <LogoutIcon />
                  </Fab>
                  </Tooltip>
      </Button>
      )}
    />
    </>
      }
    </div>
  );
};
