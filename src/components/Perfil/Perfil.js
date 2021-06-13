import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import './Perfil.css'

const Perfil = ({user}) => {
    console.log('User es ', user)
    return (
        <>
            <div className='Perfil'>
                <h2> {user.name} {user.lastName} </h2>
                <div className='Perfil-left'>
                    <div>
                    <strong>Habla:</strong> {user.nativeLanguage}
                    </div>
                    <br></br>
                    <div>
                    <strong>Intereses:</strong> {user.topics}
                    </div>
                    <br></br>
                    <Button className='floated' size='lg'><FaLock/></Button>
                    <Button className='floated' size='lg'><FaLockOpen/></Button>
                </div>
                <div className='Perfil-center'>
                    <strong>Aprende:</strong> {user.interestLanguage}
                </div>
                <img className='Perfil-right' src={user.uriProfilePicture} alt="new"/>
                
            </div>
        </>
    )
}

export default Perfil;