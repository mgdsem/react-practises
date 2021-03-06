import React from 'react';

const Input = (props) => (
    <div>
        <label htmlFor={props.id}>{props.labelText}</label>
        <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
)

export default Input;