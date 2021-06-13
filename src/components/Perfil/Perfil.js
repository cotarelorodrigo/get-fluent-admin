import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import './Perfil.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';

const server = "http://tp1-tdp2-backend-dev.herokuapp.com/";

const Perfil = ({user}) => {
    console.log('User es ', user)

    const messageBlock = 'bloquear';
    const messageUnblock = 'desbloquear';

    const blockUser = (user, messageString) => (event) => {
        confirmAlert({
          title: 'Bloquear',
          message: '¿Está seguro que desea ' + messageString + ' a ' + user.name + '?',
          buttons: [
            {
              label: 'No',
              onClick: () => alert('Click No')
            },
            {
              label: 'Si',
              onClick: () => axios.post(server + 'blocked-users', {"email": user.email})
                            .then(blockedResponse => {
                                console.log(blockedResponse);
                                if (blockedResponse.status == 200)
                                    alert('Usuario bloqueado')
                            })  
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
                    <Button className='floated' size='lg'
                      onClick={blockUser(user, messageBlock)}><FaLock/></Button>
                    <Button className='floated' size='lg' 
                      onClick={blockUser(user, messageUnblock)}><FaLockOpen/></Button>
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