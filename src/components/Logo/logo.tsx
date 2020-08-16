import React from 'react';
import './logo.sass';

export default function Logo(){
    return(
        <div className='logo'>
            <h2 className='color-text'>MEEP</h2>
            <h1 className='name'>
                <mark className='highlight'>more eyes, plz!</mark>
            </h1>        
        </div>
    )
}