import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import io from "socket.io-client";
import queryString from 'query-string';
import { useLocation } from "react-router";

let socket;

export const ScanSocket = ({location, importText}) => {

    const [mobileScan, setMobileScan] = useState('');

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("profile")))
      console.log(user.result._id)
    }, [location])

    const ENDPOINT = 'https://gobbleblog.herokuapp.com/';
    //const ENDPOINT = 'http://localhost:5000'

    useEffect(() => {
        setName(user?.result._id)
        setRoom(user?.result._id)
        
        socket = io(ENDPOINT);
   
   
        console.log("scansocket", name)


        socket.emit('join', { name, room }, (error) => {
         });
   
         return () => {
             socket.emit('disconnection');
             
             socket.off();
         }

       }, [ENDPOINT, location, user])
   
   
       useEffect(() => {
           socket.on('message', message => {
             setMessages(messages => [ ...messages, message ]);
           });
           
           socket.on("roomData", ({ users }) => {
             setUsers(users);
           });
       }, [user]);
   
       const sendMessage = (event) => {
           event.preventDefault();
   
           if(message) {
               socket.emit('sendMessage', message, () => setMessage(''))
           }
       }

       console.log("messages", messages)

    useEffect(() => {
       messages.map(newmessage => newmessage.user === "mobileclient" && //setMobileScan(newmessage.text))
                                                                        importText(newmessage.text))


    }, [messages, user])



    return (
        <div>
            <QRCode includeMargin="true" value={`https://gobbleblog.netlify.app/mobilescreen?name=mobileclient&room=${room}`} />


            {//<App setMessage={setMessage} />
            }
        </div>
    )
}
