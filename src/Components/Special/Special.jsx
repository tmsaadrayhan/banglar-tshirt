import React, { useContext } from 'react';
import { RingSecond } from './../Grandpa/Grandpa';

const Special = ({ring}) => {
    const ringSecond= useContext(RingSecond) 
    return (
        <div>
            <h3>Special</h3>
            <p><small>Ring: {ring}</small></p>
            <p><small>Ring: {ringSecond}</small></p>
        </div>
    );
};

export default Special;