import React from 'react';
import './login-logo.sass';

export default function Logo(props: {meepFontSize?: string, textFontSize?: string}){
    return(
        <div className='login-logo'>
            <h2 className='login-color-text' style={{fontSize: `${props.meepFontSize}`}}>MEEP</h2>
            <h1 className='login-name'>
                <mark className='login-highlight' style={{fontSize: `${props.textFontSize}`}}>more eyes, plz!</mark>
            </h1>        
        </div>
    )
}