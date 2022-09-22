import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../../components/Search/Search';
import PetType from '../../components/PetType/PetType';
import { FavProvider } from '../../Context/FavContext';
import io from 'socket.io-client';
import { TextField } from '@mui/material';

// const socket = io.connect('http://localhost:8080');

const apiUrl = "http://localhost:5050";

const Home = () => {

    const[state, setState] = useState({message: '', name: ''});
    const[chat, setChat] = useState([]);

    // useEffect(() => {
    //     socket.on('message', ({name, message}) => {
    //         setChat([...chat, { name, message }])
    //     })
    // })

    // const onTextChange = e => {
    //     setState({...state, [e.target.name]: e.target.value})
    // }

    // const onMessageSubmit = e => {
    //     e.preventDefault();
    //     const { name, message } = state
    //     socket.emit('message', { name, message })
    //     setState({ message: '', name })
    // }

    // const renderChat = () => {
    //     return chat.map(({name, message}, index) => {
    //         <div key={index}>
    //             <h4>{name}: <span>{message}</span></h4>
    //         </div>
    //     })
    // }
    
    return(
        <FavProvider>
            <div>
                <PetType />
                <Search />
                {/* <form onSubmit={onMessageSubmit}>
                    <h3>Messenger</h3>
                    <div>
                        <TextField name='name' onChange={e => onTextChange(e)} value={state.name} label='Name'/>
                    </div>
                    <div>
                        <TextField name='message' onChange={e => onTextChange(e)} value={state.message} label='Message'/>
                    </div>
                    <button>Send Message</button>
                </form>
                <div>
                    <h3>Chat Log</h3>
                    {renderChat()}
                </div> */}
            </div>
        </FavProvider>
    )
}

export default Home;