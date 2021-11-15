import React from 'react';
import s from './Bttn.module.css'

const Btt = ({children, ...props}) => {
    return (
        <button {...props} className={s.btt}>
            {children}
        </button>
    );
};

export default Btt;