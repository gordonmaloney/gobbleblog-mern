import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import io from "socket.io-client";
import queryString from 'query-string';

let socket;

export const ScanSocket = ({location, importText}) => {

    const [mobileScan, setMobileScan] = useState('');

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://gobbleblog.herokuapp.com/';
    //const ENDPOINT = 'http://localhost:5000'

    useEffect(() => {
        const name = "name"
        const room = "room" 
        
        socket = io(ENDPOINT);
   
        setName(name);
        setRoom(room)
   
        socket.emit('join', { name, room }, (error) => {
         });
   
         return () => {
             socket.emit('disconnection');
             
             socket.off();
         }
       }, [ENDPOINT, location])
   
   
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
       messages.map(newmessage => newmessage.user === "mobileclient" && //setMobileScan(newmessage.text))
                                                                        importText(newmessage.text))
    }, [messages])



    return (
        <div>
            <QRCode includeMargin="true" value={`https://gobbleblog.netlify.app/mobilescreen?name=mobileclient&room=room`} />


            {//<App setMessage={setMessage} />
            }
        </div>
    )
}
