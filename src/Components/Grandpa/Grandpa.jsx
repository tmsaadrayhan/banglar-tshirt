import React, { createContext, useState } from 'react';
import Father from './../Father/Father';
import Uncle from './../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./Grandpa.css"

export const RingSecond = createContext("gold");
export const Money = createContext(0);

const Grandpa = () => {
    const ring = "diamond";
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h1 >Grandpa</h1>
            <p>Has money: {money}</p>
            <Money.Provider value={[money, setMoney]}>
                <RingSecond.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingSecond.Provider>
            </Money.Provider>
        </div>
    );
};

export default Grandpa;