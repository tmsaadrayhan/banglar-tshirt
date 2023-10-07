import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { Money } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney]= useContext(Money);
    return (
        <div>
            <h3>Uncle</h3>
            <button onClick={()=> setMoney(money+1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;