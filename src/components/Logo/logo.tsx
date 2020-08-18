import React from 'react';
import './logo.sass';

export default function Logo(props: {meepFontSize?: string, textFontSize?: string, height?:string}){
    return(
        <div className='logo' style={{height:`${props.height}`}}>
            <h2 className='color-text' style={{fontSize: `${props.meepFontSize}`}}>MEEP</h2>
            <h1 className='name'>
                <mark className='highlight' style={{fontSize: `${props.textFontSize}`}}>more eyes, plz!</mark>
            </h1>        
        </div>
    )
}