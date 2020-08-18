import React from 'react';
import './logo.sass';

export default function Logo(){
    return(
        <div className='logo' style={{height: 'auto', flexFlow: 'row nowrap', justifyContent: 'center'}}>
            <h2 className='color-text' style={{fontSize: '30px'}}><span role="img" aria-label="eyes">👀</span></h2>
        </div>
    )
}