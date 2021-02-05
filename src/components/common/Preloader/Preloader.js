import preloader from './../../../assets/images/loader.gif';
import React from 'react';

let Preloader = (props) => {
    return <div>
        <img src={preloader} style={{backgroundColor: 'white'}}/>
    </div>
}

export default Preloader;