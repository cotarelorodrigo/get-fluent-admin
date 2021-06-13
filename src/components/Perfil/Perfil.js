import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import './Perfil.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const Perfil = ({user}) => {
    console.log('User es ', user)

    const blockUser = (user) => (event) => {
        confirmAlert({
          title: 'Bloquear',
          message: '¿Está seguro que desea bloquear a ' + user.name + '?',
          buttons: [
            {
              label: 'No',
              onClick: () => alert('Click No')
            },
            {
              label: 'Si',
              onClick: () => alert('Click yes')
            }
          ]
        });
    };

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
                    <Button className='Between-buttons' size='lg' onClick={blockUser(user)}><FaLock/></Button>
                    <Button className='Between-buttons' size='lg'><FaLockOpen/></Button>
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