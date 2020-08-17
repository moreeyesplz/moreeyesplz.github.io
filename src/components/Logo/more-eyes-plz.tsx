import React from 'react';
import './logo.sass';

export default function Logo(){
    return(
        <div className='logo' style={{height: "auto",  margin: "10px"}}>
            <h1 className='name' style={{height: "atuo"}}>
                <mark className='highlight' style={{fontSize: "1.5rem"}}>more eyes, plz!</mark>
            </h1>
        </div>
    )
}