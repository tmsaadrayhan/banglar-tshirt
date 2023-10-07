import React from 'react';
import Myself from './../Myself/Myself';
import Bother from '../Brother/Bother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <Myself ring= {ring}></Myself>
                <Bother></Bother>
                <Sister></Sister>
            </section>

        </div>
    );
};

export default Father;