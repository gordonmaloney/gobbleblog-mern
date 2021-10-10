import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import io from "socket.io-client";
import queryString from "query-string";
import { ScanSocket } from "./ScanSocket";
//import { MobileInput } from './MobileInput';
//import { App } from "./MobileOcr";
import { CardContent } from "@mui/material";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";

let socket;

export const Scan = ({ location, importText }) => {

  return (
    <div>
        <center>


          
            {//<QRCode includeMargin="true" value={`https://gobbleblog.netlify.app/mobilescreen?name=mobileclient&room=room`} />
            }
            <ScanSocket importText={importText} />
          
        </center>
    </div>
  );
};
