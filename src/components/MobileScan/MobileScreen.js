import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import io from "socket.io-client";
import queryString from 'query-string';
import { MobileInput } from './MobileInput';
import { App } from "./MobileOcr";

let socket;

export const MobileScreen = ({location}) => {

    const [mobileScan, setMobileScan] = useState('');

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://gobbleblog.herokuapp.com/';
    //const ENDPOINT = 'http://localhost:5000'

console.log("TEST")

    useEffect(() => {
        const {name, room} = queryString.parse(location.search) 
        
        socket = io(ENDPOINT);
   
        setName(name);
        setRoom(room)

        
   
        name && room && socket.emit('join', { name, room }, (error) => {
         });
   
         console.log(socket)
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
   

       //message.text && message.text.length > 20 && sendMessage(message)

       const sendMessage = (event) => {
           //event.preventDefault();
   
           if(message) {
               socket.emit('sendMessage', message, () => setMessage(''))
           }
       }

    useEffect(() => {
       messages.map(newmessage => newmessage.user === "mobileclient" && setMobileScan(newmessage.text))
    }, [messages])

    return (
        <div>
            TEST TEST TEST
            <App setMessage={setMessage} />
            <MobileInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
    )
}
