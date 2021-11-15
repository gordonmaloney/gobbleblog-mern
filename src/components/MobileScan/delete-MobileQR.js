import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import io from "socket.io-client";
import queryString from 'query-string';

let socket;

export const MobileScan = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://gobbleblog.herokuapp.com/';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search) 
        
        socket = io(ENDPOINT);
   
        setName(name);
        setRoom(room)
   
        socket.emit('join', { name, room }, (error) => {
         });
   
         return () => {
             socket.emit('disconnect');
             
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

    return (
        <div>
            <QRCode includeMargin="true" value={`http://gobbleblog.netlify.app/mobilescreen?name=mobileclient&room=room`} />
        </div>
    )
}
