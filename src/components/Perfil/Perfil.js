import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import './Perfil.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
import ListaFeedbacks from '../../components/ListaFeedbacks';

const server = "http://tp1-tdp2-backend-dev.herokuapp.com/";
// const server = "http://0.0.0.0:8000/";

const Perfil = ({user}) => {
    console.log('User es ', user)

    const messageBlock = 'Bloquear';
    const messageUnblock = 'Desbloquear';

    const blockUser = (user) => (event) => {
       const messageString = messageBlock;
        confirmAlert({
          title: messageString,
          message: '¿Está seguro que desea ' + messageString.toLowerCase() + ' a ' + user.name + '?',
          buttons: [
            {
              label: 'No',
              onClick: () => {}
            },
            {
              label: 'Si',
              onClick: () => 
              {
                axios.post(server + 'blocked-users/?email=' + user.email)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                      alert('Usuario bloqueado con éxito')
                      window.location.reload();
                    } else {
                      alert('Hubo un problema: ', response.status)
                    }
                });
              }
            }
          ]
        });
      };

      const unblockUser = (user) => (event) => {
        const messageString = messageUnblock;
         confirmAlert({
           title: messageString,
           message: '¿Está seguro que desea ' + messageString.toLowerCase() + ' a ' + user.name + '?',
           buttons: [
             {
               label: 'No',
               onClick: () => {}
             },
             {
               label: 'Si',
               onClick: () => 
               {
                 axios.delete(server + 'blocked-users/?email=' + user.email)
                 .then(response => {
                     console.log(response);
                     window.location.reload();
                     if (response.status === 200) {
                       alert('Usuario desbloqueado con éxito')
                     } else {
                       alert('Hubo un problema: ', response.status)
                     }
                 });
               }
             }
           ]
         });
       };
 
    return (
        <>
            <div className='Perfil'>
                <h2> {user.name} {user.lastName} </h2>
                <div className='Center-left'>
                  <div className='Perfil-left'>
                      <div>
                        <strong>Habla:</strong> {user.nativeLanguage}
                      </div>
                      <br></br>
                      <div>
                        <strong>Intereses:</strong> {user.topics}
                      </div>
                      <br></br>
                      <div>
                      <Button size='lg'
                          onClick={blockUser(user)}><FaLock/></Button>
                        <Button className='btn_unblock' size='lg' 
                          onClick={unblockUser(user)}><FaLockOpen/></Button>
                      </div>                   
                      <br></br>
                      <div className='Feedback'>
                        <ListaFeedbacks email={user.email}/>
                      </div>                                                             
                  </div>
                  <div className='Perfil-center'>
                    <strong>Aprende:</strong> {user.interestLanguage}
                  </div>
                  <br></br>
                  <br></br>
                  <div className='Perfil-center'>
                    <strong>Estado:</strong> 
                    {
                      user.is_blocked ? <b className="Perfil-block"> Bloqueado</b> : <b className="Perfil-unblock"> Desbloqueado</b>
                    }
                  </div>
                </div>                                              
                <img className='Perfil-right' src={user.uriProfilePicture} alt="new"/>
            </div>
        </>
    )
}

export default Perfil;