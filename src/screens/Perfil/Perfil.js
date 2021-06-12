import React from 'react';

const Perfil = ({user}) => {
    console.log('User es ', user)
    return (
        <>
        <h2> {user.name} {user.lastName} </h2>
        <div> Habla: {user.nativeLanguage}</div>
        <div> Aprende: {user.interestLanguage}</div>
        <div> Aprende: {user.interestLanguage}</div>
        <div> Intereses: {user.topics}</div>
        </>
    )
}

export default Perfil;