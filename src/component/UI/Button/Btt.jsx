import React from 'react';
import s from './Bttn.module.css'

const Btt = (props) => {
    return (
        <button className={s.btt}>
            {props.children}
        </button>
    );
};

export default Btt;