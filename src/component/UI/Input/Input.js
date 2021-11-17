import React from 'react';
import s from './MyInput.module.css'

const Input = (props) => {
    return (
        <div>
            <input className={s.Myinput} {...props}/>
        </div>
    );
};

export default Input;