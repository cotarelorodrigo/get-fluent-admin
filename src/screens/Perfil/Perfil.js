import React from 'react';
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