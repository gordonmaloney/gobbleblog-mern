import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import io from "socket.io-client";
import queryString from 'query-string';
import { MobileInput } from './MobileInput';
import { App } from "./MobileOcr";

let socket;

export const MobileScan = ({location}) => {

    const [mobileScan, setMobileScan] = useState('');

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search) 
        
        socket = io(ENDPOINT);
   
        setName(name);
        setRoom(room)
   
        socket.emit('join', { name, room }, (error) => {
         });
   
         return () => {
             socket.emit('disconnection');
             
             socket.off();
         }
       }, [ENDPOINT, location.search])
   
   
       useEffect(() => {
           socket.on('message', message => {
             setMessages(messages => [ ...messages, message ]);
           });
           
           socket.on("roomData", ({ users }) => {
             setUsers(users);
           });
       }, []);
   
       const sendMessage = (event) => {
           event.preventDefault();
   
           if(message) {
               socket.emit('sendMessage', message, () => setMessage(''))
           }
       }
       console.log(messages)

    useEffect(() => {
        console.log("test")
       messages.map(newmessage => newmessage.user === "mobileclient" && setMobileScan(newmessage.text))
    }, [messages])

    return (
        <div>
            <QRCode includeMargin="true" value={`http://localhost:3000/mobilescreen?name=mobileclient&room=room`} />

            <MobileInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>

<h1 style={{color: "white"}}>Text from mobile: {mobileScan}</h1>
            <App setMessage={setMessage} />
        </div>
    )
}
