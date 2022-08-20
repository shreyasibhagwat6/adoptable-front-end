import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import './PetDetails.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavList from '../FavList/FavList';

const PetDetails = (props) => {
    const [pets, setPets] = useState({})
    const [active, setActive] = useState('false');
    const [fav, setFav] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);  
    const { petId } = useParams();

    console.log(petId);

    useEffect(() =>{
        axios
            .get(`http://localhost:5050/pets/${petId}`)
            .then(res => {
                setPets(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [petId])

    console.log(pets)

    const clickHandler = () => {
        const newFavList = [...fav, pets]
        setActive(!active);
        setFav(newFavList)
    }
    console.log(fav)

    return(
        <div>
            <img className='img' alt='' src={`http://localhost:5050/${pets.image}`}></img>
            <div>
                <FavoriteBorderIcon className={active ? null : 'app'} onClick={clickHandler}/>
            </div>
            <h2>{pets.name}</h2>
            <p>{pets.type}</p>
            <p>{pets.sex}</p>
            <p>{pets.age}</p>
            <p>{pets.colour}</p>
            <p>{pets.breed}</p>
            <p>{pets.adoption}</p>
            <p>{pets.littertrained}</p>
            <p>{pets.health}</p>
            <p>{pets.nature}</p>
            <p>{pets.fee}</p>
            <p>{pets.users_id}</p>
            <button>Message</button>
            <button onClick={e => setModalIsOpen(true)}>Adopt {pets.name}</button>
            <Modal isOpen={modalIsOpen} onRequestClose={e => setModalIsOpen(false)}>
                <h4>Adoption Application Form</h4>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>E-Mail</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Tell Us About Yourself</label>
                        <input type='text'></input>
                    </div>
                </form>
                <div>
                    <button onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
            {/* <Link to='/favourites'>
                <FavList fav={fav}/>
            </Link> */}
        </div>
    )
}

export default PetDetails;