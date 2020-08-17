import React from 'react';
import './login-logo.sass';

export default function Logo(){
    return(
        <div className='login-logo'>
            <h2 className='login-color-text'>MEEP</h2>
            <h1 className='login-name'>
                <mark className='login-highlight'>more eyes, plz!</mark>
            </h1>        
        </div>
    )
}