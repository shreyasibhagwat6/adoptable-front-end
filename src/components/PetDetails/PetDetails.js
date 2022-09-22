import React, { createContext, useRef, useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import './PetDetails.scss';
import { useFav } from '../../Context/FavContext'
import heart from '../../Assets/Icons/heart.png';
import activeHeart from '../../Assets/Icons/heart_active.png';
import { UserContext } from '../../Context/UserContext';

const PetDetails = (props) => {

    const { value, setValue } = useContext(UserContext);
    const [pets, setPets] = useState({})
    const [active, setActive] = useState('false');
    const [user, setUser] = useState('');
    const [fav, updateFav] = useFav();
    const [modal, setModal] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);  
    const { petId } = useParams();

    console.log(petId);
    console.log(pets);
    console.log(pets.users_id)

    useEffect(() => {
        axios
            .get(`http://localhost:5050/pets/${petId}`)
            .then(res => {
                setPets(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [petId])

    console.log(petId);
    console.log(value);

    useEffect(() => {
        axios
            .get('http://localhost:5050/users')
            .then(response => {
               const owners = response.data;
               console.log(pets.users_id)
               console.log(owners);
               const selectUser = owners.filter(owner => owner.id === pets.users_id);
               console.log(selectUser[0]);
               setUser(selectUser);
            })
            .catch(err => {
                console.log(err);
            })
    }, [petId]); 
    
        const clickHandler = () => {
            setActive(!active);
            updateFav('pets', pets.id, pets)
        }
          
    console.log(user[0]);
    console.log(petId);

    return(
        <div className='details'>
            <div className='details__cont'>
                <img className='image' alt='' src={`http://localhost:5050/${pets.image}`}></img>
            </div>
            <div className='details__page'> 
                <div className='page__top' onClick={clickHandler}>
                    <img className='img1' alt='' src={heart}></img>
                    <img className={active ? 'img2': 'app'} alt='' src={activeHeart}></img>
                </div>
                <div className='details__info'>
                    <h2>{pets.name}</h2>
                    <h4>ABOUT</h4>
                    <div>
                        <div>
                            <p>{pets.sex}</p>
                            <p>{pets.age}</p>
                        </div>
                        <div>
                            <h4>COLOUR AND BREED</h4>
                            <p>{pets.colour}</p>
                            <p>{pets.breed}</p>
                        </div>
                        <div>
                            <h4>ADOPTION STORY</h4>
                            <p>{pets.adoption}</p>
                        </div>
                        <div>
                            <h4>LITTER TRAINED</h4>
                            <p>{pets.littertrained}</p>
                        </div>
                        <div>
                            <h4>HEALTH</h4>
                            <p>{pets.health}</p>
                        </div>
                        <div>
                            <h4>ADOPTION FEE </h4>
                            <p>{pets.fee}</p>
                        </div>
                    </div>
                    <h3>Meet {pets.name}</h3>
                    <div>
                        <p>{pets.nature}</p>
                    </div>
                    {/* <div>
                        <h3>For Adoption from</h3>
                        <p>{user[0].name}</p>
                    </div> */}
                </div>
                <button className='details__button' onClick={e => setModal(true)}>Message</button>
                <button className='details__button' onClick={e => setModalIsOpen(true)}>Adopt {pets.name}</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={e => setModalIsOpen(false)}>
                <h4>Adoption Application Form</h4>
                <form>
                    <div className='form__cont'>
                        <label className='form__label'>First Name: </label>
                        <input className='form__input' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Last Name: </label>
                        <input className='form__input' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>E-Mail: </label>
                        <input className='form__input' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Tell Us About Yourself: </label>
                        <input className='form__input' type='text'></input>
                    </div>
                </form>
                <div>
                <button className='form__button'>Submit</button>
                    <button className='form__button' onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
            <Modal isOpen={modal} onRequestClose={e => setModal(false)}>
                <h4>Message</h4>
                <form>
                    <div className='form__cont'>
                        <label className='form__label'>E-Mail: </label>
                        <input className='form__input' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Message: </label>
                        <input className='form__input' type='text'></input>
                    </div>
                </form>
                <div>
                <button className='form__button'>Submit</button>
                    <button className='form__button' onClick={e => setModal(false)}>Close</button>
                </div>    
            </Modal>
        </div>
    )
}

export default PetDetails;