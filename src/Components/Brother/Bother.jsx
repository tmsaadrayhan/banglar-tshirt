import React, { useContext } from 'react';
import { RingSecond } from './../Grandpa/Grandpa';

const Bother = () => {
    const ring= useContext(RingSecond);
    return (
        <div>
            <h3>Brother</h3>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Bother;