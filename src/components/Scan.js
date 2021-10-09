import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import io from "socket.io-client";
import queryString from 'query-string';
import { ScanSocket } from './ScanSocket';
//import { MobileInput } from './MobileInput';
//import { App } from "./MobileOcr";

let socket;

export const Scan = ({location, importText}) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={(e)=>{e.preventDefault(); setShow(!show)}}>Scan from your phone</button>

            {!show &&
            //<QRCode includeMargin="true" value={`https://gobbleblog.netlify.app/mobilescreen?name=mobileclient&room=room`} />
            <ScanSocket importText={importText} />
            }
        


            <button value="test" onClick={(e)=>{e.preventDefault(); importText(e.target.value)}}>Import text</button>
        </div>
    )
}
